import { normalizeJmdictEntry } from "./normalizeEntry.js";
import { parseJmdictEntry } from "./parseEntry.js";
import { readJmdictEntries } from "./readEntries.js";

const filePath = "data/raw/JMdict_e";

let entryCount = 0;
let candidateCount = 0;
let entriesWithNoCandidates = 0;
let candidatesWithNoSenses = 0;

const problemExamples: string[] = [];

for await (const entryXml of readJmdictEntries(filePath)) {
  const entry = parseJmdictEntry(entryXml);
  const candidates = normalizeJmdictEntry(entry);

  entryCount += 1;
  candidateCount += candidates.length;

  if (candidates.length === 0) {
    entriesWithNoCandidates += 1;

    if (problemExamples.length < 5) {
      problemExamples.push(
        `Entry ${entry.entrySequence} produced no candidates`,
      );
    }
  }

  for (const candidate of candidates) {
    if (candidate.senses.length === 0) {
      candidatesWithNoSenses += 1;

      if (problemExamples.length < 5) {
        problemExamples.push(
          `Entry ${candidate.sourceEntrySequence}: ${candidate.reading} produced a candidate with no senses`,
        );
      }
    }
  }

  if (entryCount % 10000 === 0) {
    console.log(`Validated ${entryCount} entries...`);
  }
}

console.log("\nNormalization validation complete.");
console.log(`Entries: ${entryCount}`);
console.log(`Candidates: ${candidateCount}`);
console.log(`Entries with no candidates: ${entriesWithNoCandidates}`);
console.log(`Candidates with no senses: ${candidatesWithNoSenses}`);

if (problemExamples.length > 0) {
  console.log("\nFirst problem examples:");

  for (const example of problemExamples) {
    console.log(`- ${example}`);
  }
}
