import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";

export async function* readJmdictEntries(
  filePath: string,
): AsyncGenerator<string> {
  const fileStream = createReadStream(filePath, {
    encoding: "utf8",
  });

  const lines = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let collectingEntry = false;
  let entryLines: string[] = [];

  for await (const line of lines) {
    if (line.includes("<entry>")) {
      collectingEntry = true;
      entryLines = [];
    }

    if (collectingEntry) {
      entryLines.push(line);
    }

    if (collectingEntry && line.includes("</entry>")) {
      yield entryLines.join("\n");

      collectingEntry = false;
      entryLines = [];
    }
  }
}
