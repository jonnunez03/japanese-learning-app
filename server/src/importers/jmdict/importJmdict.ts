import pool from "../../database/db.js";
import { readJmdictEntries } from "./readEntries.js";
import { parseJmdictEntry } from "./parseEntry.js";
import type { JmdictEntry } from "./types.js";

const filePath = "data/raw/JMdict_e";
const limitArg = process.argv[2] ?? "5";

const maxEntries = limitArg === "all" ? null : Number(limitArg);

const batchSize = 500;

async function insertBatch(entries: JmdictEntry[]) {
  if (entries.length === 0) {
    return;
  }

  const values: unknown[] = [];

  const placeholders = entries.map((entry, index) => {
    const offset = index * 2;

    values.push(entry.entrySequence, JSON.stringify(entry));

    return `($${offset + 1}, $${offset + 2}::jsonb)`;
  });

  await pool.query(
    `
      INSERT INTO jmdict_entries (
        entry_sequence,
        data
      )
      VALUES ${placeholders.join(", ")}
      ON CONFLICT (entry_sequence)
      DO UPDATE SET
        data = EXCLUDED.data,
        imported_at = CURRENT_TIMESTAMP
    `,
    values,
  );
}

if (maxEntries !== null && (!Number.isInteger(maxEntries) || maxEntries <= 0)) {
  throw new Error('Import limit must be a positive integer or "all".');
}

let importedCount = 0;
let batch: JmdictEntry[] = [];

try {
  for await (const entryXml of readJmdictEntries(filePath)) {
    const entry = parseJmdictEntry(entryXml);

    batch.push(entry);
    importedCount += 1;

    if (batch.length >= batchSize) {
      await insertBatch(batch);
      batch = [];

      console.log(`Imported ${importedCount} entries...`);
    }

    if (maxEntries !== null && importedCount >= maxEntries) {
      break;
    }
  }

  if (batch.length > 0) {
    await insertBatch(batch);
  }

  console.log(`Imported ${importedCount} JMdict entries.`);
} finally {
  await pool.end();
}
