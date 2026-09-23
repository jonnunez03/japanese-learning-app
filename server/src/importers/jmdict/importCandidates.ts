import pool from "../../database/db.js";
import {
  normalizeJmdictEntry,
  type VocabularyCandidate,
} from "./normalizeEntry.js";
import type { JmdictEntry } from "./types.js";

const entryBatchSize = 500;

async function insertCandidateBatch(candidates: VocabularyCandidate[]) {
  if (candidates.length === 0) {
    return;
  }

  const values: unknown[] = [];

  const placeholders = candidates.map((candidate, index) => {
    const offset = index * 5;

    values.push(
      candidate.sourceEntrySequence,
      candidate.writtenForm,
      candidate.reading,
      JSON.stringify(candidate.priorities),
      JSON.stringify(candidate.senses),
    );

    return `(
      $${offset + 1},
      $${offset + 2},
      $${offset + 3},
      $${offset + 4}::jsonb,
      $${offset + 5}::jsonb
    )`;
  });

  await pool.query(
    `
      INSERT INTO jmdict_candidates (
        source_entry_sequence,
        written_form,
        reading,
        priorities,
        senses
      )
      VALUES ${placeholders.join(", ")}
      ON CONFLICT ON CONSTRAINT
        uq_jmdict_candidates_source_form_reading
      DO UPDATE SET
        priorities = EXCLUDED.priorities,
        senses = EXCLUDED.senses
    `,
    values,
  );
}

const limitArg = process.argv[2] ?? "20";

const maxEntries = limitArg === "all" ? null : Number(limitArg);

if (maxEntries !== null && (!Number.isInteger(maxEntries) || maxEntries <= 0)) {
  throw new Error('Import limit must be a positive integer or "all".');
}

let processedEntries = 0;
let importedCandidates = 0;
let lastEntrySequence = "";

try {
  while (maxEntries === null || processedEntries < maxEntries) {
    const remaining =
      maxEntries === null
        ? entryBatchSize
        : Math.min(entryBatchSize, maxEntries - processedEntries);

    const result = await pool.query(
      `
        SELECT entry_sequence, data
        FROM jmdict_entries
        WHERE entry_sequence > $1
        ORDER BY entry_sequence
        LIMIT $2
      `,
      [lastEntrySequence, remaining],
    );

    if (result.rows.length === 0) {
      break;
    }

    const candidates: VocabularyCandidate[] = [];

    for (const row of result.rows) {
      const entry = row.data as JmdictEntry;

      candidates.push(...normalizeJmdictEntry(entry));

      lastEntrySequence = row.entry_sequence;
      processedEntries += 1;
    }

    await insertCandidateBatch(candidates);

    importedCandidates += candidates.length;

    console.log(
      `Processed ${processedEntries} entries → ${importedCandidates} candidates...`,
    );
  }

  console.log(
    `Candidate import complete. Processed ${processedEntries} entries and imported ${importedCandidates} candidates.`,
  );
} finally {
  await pool.end();
}
