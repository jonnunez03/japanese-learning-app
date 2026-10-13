import { toRomaji } from "wanakana";
import pool from "../../database/db.js";
import { foundationVocabulary } from "../../curriculum/foundationVocabulary.js";

function getWordType(partsOfSpeech: string[]): string {
  const pos = partsOfSpeech[0] ?? "";

  if (pos.includes("&v")) {
    return "verb";
  }

  if (pos.includes("&adj")) {
    return "adjective";
  }

  if (pos === "&n;") {
    return "noun";
  }

  if (pos === "&adv;") {
    return "adverb";
  }

  if (pos === "&pn;") {
    return "pronoun";
  }

  if (pos === "&exp;") {
    return "expression";
  }

  return "other";
}

interface CandidateRow {
  source_entry_sequence: string;
  written_form: string | null;
  reading: string;
  priorities: string[];
  senses: Array<{
    partsOfSpeech: string[];
    glosses: string[];
  }>;
}

const curriculumOrder = new Map(
  foundationVocabulary.map((word, index) => [
    `${word.writtenForm}:${word.reading}`,
    index + 1,
  ]),
);

const result = await pool.query<CandidateRow>(
  `
    WITH preview_words AS (
      SELECT *
      FROM jsonb_to_recordset($1::jsonb)
        AS p("writtenForm" text, reading text)
    )

    SELECT
      candidate.source_entry_sequence,
      candidate.written_form,
      candidate.reading,
      candidate.priorities,
      candidate.senses
    FROM jmdict_candidates AS candidate
    JOIN preview_words AS p
      ON candidate.written_form = p."writtenForm"
      AND candidate.reading = p.reading
    ORDER BY candidate.id
  `,
  [JSON.stringify(foundationVocabulary)],
);

let syncedCount = 0;

for (const row of result.rows) {
  const firstSense = row.senses[0];

  const english = firstSense?.glosses[0] ?? "";
  const wordType = getWordType(firstSense?.partsOfSpeech ?? []);
  const romaji = toRomaji(row.reading);

  const sourceId = [
    row.source_entry_sequence,
    row.written_form ?? "kana-only",
    row.reading,
  ].join(":");

  const isCommon =
    row.priorities.includes("ichi1") || row.priorities.includes("news1");

  const order = curriculumOrder.get(`${row.written_form}:${row.reading}`);

  if (order === undefined) {
    throw new Error(
      `Curriculum order not found for ${row.written_form} / ${row.reading}`,
    );
  }

  await pool.query(
    `
      INSERT INTO words (
        kanji,
        kana,
        romaji,
        english,
        word_type,
        is_common,
        jlpt_level,
        source,
        source_id,
        study_level,
        curriculum_order
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        NULL,
        'JMdict_e',
        $7,
        'FOUNDATION',
        $8
      )
      ON CONFLICT (source, source_id)
        WHERE source_id IS NOT NULL
      DO UPDATE SET
        kanji = EXCLUDED.kanji,
        kana = EXCLUDED.kana,
        romaji = EXCLUDED.romaji,
        english = EXCLUDED.english,
        word_type = EXCLUDED.word_type,
        is_common = EXCLUDED.is_common,
        study_level = EXCLUDED.study_level,
        curriculum_order = EXCLUDED.curriculum_order
    `,
    [
      row.written_form,
      row.reading,
      romaji,
      english,
      wordType,
      isCommon,
      sourceId,
      order,
    ],
  );

  syncedCount += 1;
}

console.log(`Synced ${syncedCount} preview words into words.`);

await pool.end();
