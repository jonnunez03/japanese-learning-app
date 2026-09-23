import pool from "../../database/db.js";
import { readJmdictEntries } from "./readEntries.js";
import { parseJmdictEntry } from "./parseEntry.js";

const filePath = "data/raw/JMdict_e";
const limitArg = process.argv[2] ?? "5";

const maxEntries = limitArg === "all" ? null : Number(limitArg);

if (maxEntries !== null && (!Number.isInteger(maxEntries) || maxEntries <= 0)) {
  throw new Error('Import limit must be a positive integer or "all".');
}

let importedCount = 0;

try {
  for await (const entryXml of readJmdictEntries(filePath)) {
    const entry = parseJmdictEntry(entryXml);

    await pool.query(
      `
        INSERT INTO jmdict_entries (
          entry_sequence,
          data
        )
        VALUES ($1, $2)
        ON CONFLICT (entry_sequence)
        DO UPDATE SET
          data = EXCLUDED.data,
          imported_at = CURRENT_TIMESTAMP
      `,
      [entry.entrySequence, JSON.stringify(entry)],
    );

    importedCount += 1;

    if (maxEntries !== null && importedCount >= maxEntries) {
      break;
    }
  }

  console.log(`Imported ${importedCount} JMdict entries.`);
} finally {
  await pool.end();
}
