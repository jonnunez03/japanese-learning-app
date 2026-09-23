import { normalizeJmdictEntry } from "./normalizeEntry.js";
import type { JmdictEntry } from "./types.js";

const entry: JmdictEntry = {
  entrySequence: "1000110",

  kanjiElements: [
    {
      text: "ＣＤプレーヤー",
      priorities: ["spec1"],
    },
    {
      text: "ＣＤプレイヤー",
      priorities: [],
    },
  ],

  readingElements: [
    {
      text: "シーディープレーヤー",
      noKanji: false,
      restrictions: ["ＣＤプレーヤー"],
      priorities: ["spec1"],
    },
    {
      text: "シーディープレイヤー",
      noKanji: false,
      restrictions: ["ＣＤプレイヤー"],
      priorities: [],
    },
  ],

  senses: [
    {
      partsOfSpeech: ["&n;"],
      kanjiRestrictions: [],
      readingRestrictions: [],
      fields: [],
      miscellaneous: [],
      glosses: [
        {
          text: "CD player",
          language: "eng",
        },
      ],
    },
  ],
};

const candidates = normalizeJmdictEntry(entry);

console.log(JSON.stringify(candidates, null, 2));

const restrictedEntry: JmdictEntry = {
  entrySequence: "9999999",

  kanjiElements: [
    {
      text: "開く",
      priorities: [],
    },
    {
      text: "空く",
      priorities: [],
    },
  ],

  readingElements: [
    {
      text: "あく",
      noKanji: false,
      restrictions: ["開く"],
      priorities: [],
    },
    {
      text: "すく",
      noKanji: false,
      restrictions: ["空く"],
      priorities: [],
    },
  ],

  senses: [
    {
      partsOfSpeech: ["&v5k;"],
      kanjiRestrictions: ["開く"],
      readingRestrictions: [],
      fields: [],
      miscellaneous: [],
      glosses: [
        {
          text: "to open",
          language: "eng",
        },
      ],
    },
    {
      partsOfSpeech: ["&v5k;"],
      kanjiRestrictions: ["空く"],
      readingRestrictions: ["すく"],
      fields: [],
      miscellaneous: [],
      glosses: [
        {
          text: "to become empty",
          language: "eng",
        },
      ],
    },
  ],
};

console.log("\nRestricted senses:");
console.log(JSON.stringify(normalizeJmdictEntry(restrictedEntry), null, 2));

const kanaOnlyEntry: JmdictEntry = {
  entrySequence: "8888888",

  kanjiElements: [],

  readingElements: [
    {
      text: "ありがとう",
      noKanji: true,
      restrictions: [],
      priorities: ["ichi1"],
    },
  ],

  senses: [
    {
      partsOfSpeech: ["&exp;"],
      kanjiRestrictions: [],
      readingRestrictions: [],
      fields: [],
      miscellaneous: [],
      glosses: [
        {
          text: "thank you",
          language: "eng",
        },
      ],
    },
  ],
};

console.log("\nKana-only entry:");
console.log(JSON.stringify(normalizeJmdictEntry(kanaOnlyEntry), null, 2));
