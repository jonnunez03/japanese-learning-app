import pool from "../../database/db.js";

interface CandidateRow {
  source_entry_sequence: string;
  written_form: string | null;
  reading: string;
  priorities: string[];
  zipf_frequency: number | null;
  senses: Array<{
    partsOfSpeech: string[];
    miscellaneous: string[];
    glosses: string[];
  }>;
}

function getLexicalPriorityScore(priorities: string[]): number {
  if (priorities.includes("ichi1")) return 40;
  if (priorities.includes("ichi2")) return 20;

  if (priorities.includes("spec1")) return 15;
  if (priorities.includes("spec2")) return 8;

  if (priorities.includes("gai1")) return 15;
  if (priorities.includes("gai2")) return 8;

  return 0;
}

function isSuitableCandidate(candidate: CandidateRow): boolean {
  const firstSense = candidate.senses[0];

  const blockedPartsOfSpeech = [
    "&prt;",
    "&aux;",
    "&aux-v;",
    "&aux-adj;",
    "&cop;",
    "&conj;",
    "&exp;",
    "&suf;",
    "&pref;",
    "&ctr;",
    "&n-suf;",
    "&n-pref;",
    "&int;",
  ];

  const hasBlockedPartOfSpeech = firstSense.partsOfSpeech.some((tag) =>
    blockedPartsOfSpeech.includes(tag),
  );

  if (hasBlockedPartOfSpeech) {
    return false;
  }

  const hasLexicalPartOfSpeech = firstSense.partsOfSpeech.some(
    (tag) =>
      tag === "&n;" ||
      tag === "&pn;" ||
      tag === "&adv;" ||
      tag.startsWith("&v") ||
      tag.startsWith("&adj"),
  );

  if (!hasLexicalPartOfSpeech) {
    return false;
  }

  if (!firstSense) {
    return false;
  }

  if (firstSense.glosses.length === 0) {
    return false;
  }

  const blockedTags = ["&arch;", "&obs;", "&rare;"];

  const hasBlockedTag = firstSense.miscellaneous.some((tag) =>
    blockedTags.includes(tag),
  );

  if (hasBlockedTag) {
    return false;
  }

  return true;
}

const result = await pool.query<CandidateRow>(
  `
    SELECT
      ranked.source_entry_sequence,
      ranked.written_form,
      ranked.reading,
      ranked.priorities,
      ranked.senses,
      frequency.zipf_frequency
    FROM (
      SELECT
        source_entry_sequence,
        written_form,
        reading,
        priorities,
        senses,
        ROW_NUMBER() OVER (
          PARTITION BY source_entry_sequence
          ORDER BY id
        ) AS candidate_rank
      FROM jmdict_candidates
    ) AS ranked
    LEFT JOIN word_frequency AS frequency
      ON frequency.surface_form =
        COALESCE(ranked.written_form, ranked.reading)
    WHERE ranked.candidate_rank = 1
  `,
);

const scoredCandidates = result.rows
  .filter(isSuitableCandidate)
  .map((candidate) => {
    const firstSense = candidate.senses[0];

    return {
      sourceEntrySequence: candidate.source_entry_sequence,
      writtenForm: candidate.written_form,
      reading: candidate.reading,
      english: firstSense?.glosses[0] ?? "",
      partsOfSpeech: firstSense?.partsOfSpeech ?? [],
      priorities: candidate.priorities,
      lexicalPriorityScore: getLexicalPriorityScore(candidate.priorities),
      zipfFrequency: candidate.zipf_frequency ?? 0,
      foundationScore:
        Math.round(
          ((candidate.zipf_frequency ?? 0) * 10 +
            getLexicalPriorityScore(candidate.priorities)) *
            10,
        ) / 10,
    };
  })
  .filter(
    (candidate) =>
      candidate.zipfFrequency > 0 && candidate.lexicalPriorityScore > 0,
  );

const candidates = scoredCandidates
  .sort((a, b) => b.foundationScore - a.foundationScore)
  .slice(0, 100);

console.table(candidates);

await pool.end();
