import pool from "../database/db.js";

export async function getAllWords() {
  const result = await pool.query("SELECT * FROM words ORDER BY id");

  return result.rows;
}
