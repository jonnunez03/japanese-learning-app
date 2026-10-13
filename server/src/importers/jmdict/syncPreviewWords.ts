import { toRomaji } from "wanakana";
import pool from "../../database/db.js";

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

const previewVocabulary = [
  { writtenForm: "食べる", reading: "たべる" },
  { writtenForm: "飲む", reading: "のむ" },
  { writtenForm: "見る", reading: "みる" },
  { writtenForm: "行く", reading: "いく" },
  { writtenForm: "来る", reading: "くる" },
  { writtenForm: "会う", reading: "あう" },
  { writtenForm: "家", reading: "いえ" },
  { writtenForm: "学校", reading: "がっこう" },
  { writtenForm: "水", reading: "みず" },
  { writtenForm: "本", reading: "ほん" },
  { writtenForm: "人", reading: "ひと" },
  { writtenForm: "友達", reading: "ともだち" },
  { writtenForm: "家族", reading: "かぞく" },
  { writtenForm: "今日", reading: "きょう" },
  { writtenForm: "明日", reading: "あした" },
  { writtenForm: "昨日", reading: "きのう" },
  { writtenForm: "朝", reading: "あさ" },
  { writtenForm: "夜", reading: "よる" },
  { writtenForm: "車", reading: "くるま" },
  { writtenForm: "電車", reading: "でんしゃ" },
  { writtenForm: "駅", reading: "えき" },
  { writtenForm: "店", reading: "みせ" },
  { writtenForm: "名前", reading: "なまえ" },
  { writtenForm: "日本", reading: "にほん" },
  { writtenForm: "英語", reading: "えいご" },
  { writtenForm: "日本語", reading: "にほんご" },
  { writtenForm: "映画", reading: "えいが" },
  { writtenForm: "音楽", reading: "おんがく" },
  { writtenForm: "大きい", reading: "おおきい" },
  { writtenForm: "小さい", reading: "ちいさい" },
];

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
  [JSON.stringify(previewVocabulary)],
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
        source_id
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
        $7
      )
      ON CONFLICT (source, source_id)
        WHERE source_id IS NOT NULL
      DO UPDATE SET
        kanji = EXCLUDED.kanji,
        kana = EXCLUDED.kana,
        romaji = EXCLUDED.romaji,
        english = EXCLUDED.english,
        word_type = EXCLUDED.word_type,
        is_common = EXCLUDED.is_common
    `,
    [
      row.written_form,
      row.reading,
      romaji,
      english,
      wordType,
      isCommon,
      sourceId,
    ],
  );

  syncedCount += 1;
}

console.log(`Synced ${syncedCount} preview words into words.`);

await pool.end();
