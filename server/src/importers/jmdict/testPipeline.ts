import { readJmdictEntries } from "./readEntries.js";
import { parseJmdictEntry } from "./parseEntry.js";

const filePath = "data/test/jmdict-sample.xml";

let count = 0;

for await (const entryXml of readJmdictEntries(filePath)) {
  const entry = parseJmdictEntry(entryXml);

  count += 1;

  console.log(`Parsed entry ${count}:`);
  console.log(JSON.stringify(entry, null, 2));
  console.log("---");
}

console.log(`Total parsed entries: ${count}`);
