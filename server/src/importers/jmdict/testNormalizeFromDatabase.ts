import pool from "../../database/db.js";
import { normalizeJmdictEntry } from "./normalizeEntry.js";
import type { JmdictEntry } from "./types.js";

const entrySequence = "1000320";

try {
  const result = await pool.query(
    `
      SELECT data
      FROM jmdict_entries
      WHERE entry_sequence = $1
    `,
    [entrySequence],
  );

  if (result.rows.length === 0) {
    throw new Error(`JMdict entry ${entrySequence} was not found.`);
  }

  const entry = result.rows[0].data as JmdictEntry;

  const candidates = normalizeJmdictEntry(entry);

  console.log(JSON.stringify(candidates, null, 2));
} finally {
  await pool.end();
}
