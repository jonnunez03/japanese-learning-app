import type { JmdictEntry, JmdictReadingElement } from "./types.js";

export interface VocabularyCandidate {
  sourceEntrySequence: string;
  writtenForm: string | null;
  reading: string;
  priorities: string[];
  senses: VocabularyCandidateSense[];
}

export interface VocabularyCandidateSense {
  partsOfSpeech: string[];
  fields: string[];
  miscellaneous: string[];
  glosses: string[];
}

function getWrittenFormsForReading(
  entry: JmdictEntry,
  reading: JmdictReadingElement,
): Array<string | null> {
  if (reading.noKanji || entry.kanjiElements.length === 0) {
    return [null];
  }

  if (reading.restrictions.length > 0) {
    return reading.restrictions;
  }

  return entry.kanjiElements.map((kanji) => kanji.text);
}

function senseAppliesToCandidate(
  sense: JmdictEntry["senses"][number],
  writtenForm: string | null,
  reading: string,
): boolean {
  const matchesKanji =
    sense.kanjiRestrictions.length === 0 ||
    (writtenForm !== null && sense.kanjiRestrictions.includes(writtenForm));

  const matchesReading =
    sense.readingRestrictions.length === 0 ||
    sense.readingRestrictions.includes(reading);

  return matchesKanji && matchesReading;
}

export function normalizeJmdictEntry(
  entry: JmdictEntry,
): VocabularyCandidate[] {
  const candidates: VocabularyCandidate[] = [];

  for (const reading of entry.readingElements) {
    const writtenForms = getWrittenFormsForReading(entry, reading);

    for (const writtenForm of writtenForms) {
      const writtenPriorities =
        writtenForm === null
          ? []
          : (entry.kanjiElements.find((kanji) => kanji.text === writtenForm)
              ?.priorities ?? []);

      const senses = entry.senses
        .filter((sense) =>
          senseAppliesToCandidate(sense, writtenForm, reading.text),
        )
        .map((sense) => ({
          partsOfSpeech: sense.partsOfSpeech,
          fields: sense.fields,
          miscellaneous: sense.miscellaneous,
          glosses: sense.glosses
            .filter((gloss) => gloss.language === "eng")
            .map((gloss) => gloss.text),
        }));

      candidates.push({
        sourceEntrySequence: entry.entrySequence,
        writtenForm,
        reading: reading.text,
        priorities: [...new Set([...writtenPriorities, ...reading.priorities])],
        senses,
      });
    }
  }

  return candidates;
}
