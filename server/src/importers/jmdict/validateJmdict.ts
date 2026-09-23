import { readJmdictEntries } from "./readEntries.js";
import { parseJmdictEntry } from "./parseEntry.js";

const filePath = "data/raw/JMdict_e";

let count = 0;

for await (const entryXml of readJmdictEntries(filePath)) {
  parseJmdictEntry(entryXml);

  count += 1;

  if (count % 10000 === 0) {
    console.log(`Validated ${count} entries...`);
  }
}

console.log(`Validation complete. Parsed ${count} JMdict entries.`);
