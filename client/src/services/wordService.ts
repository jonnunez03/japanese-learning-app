import type { Word } from "../types/Word";

export async function getWords(): Promise<Word[]> {
  const response = await fetch("http://localhost:3000/api/words");

  if (!response.ok) {
    throw new Error("Failed to fetch words");
  }

  const words: Word[] = await response.json();

  return words;
}
