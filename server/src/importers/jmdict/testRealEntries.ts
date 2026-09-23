import { readJmdictEntries } from "./readEntries.js";
import { parseJmdictEntry } from "./parseEntry.js";

const filePath = "data/raw/JMdict_e";

for await (const entryXml of readJmdictEntries(filePath)) {
  const entry = parseJmdictEntry(entryXml);

  const hasSenseRestriction = entry.senses.some(
    (sense) =>
      sense.kanjiRestrictions.length > 0 ||
      sense.readingRestrictions.length > 0,
  );

  if (hasSenseRestriction) {
    console.log("ENTRY WITH SENSE RESTRICTION:");
    console.log(JSON.stringify(entry, null, 2));
    break;
  }
}
