import { readJmdictEntries } from "./readEntries.js";

const filePath = "data/test/jmdict-sample.xml";

let count = 0;

for await (const entryXml of readJmdictEntries(filePath)) {
  count += 1;

  console.log(`Entry ${count}:`);
  console.log(entryXml);
  console.log("---");
}

console.log(`Total entries: ${count}`);
