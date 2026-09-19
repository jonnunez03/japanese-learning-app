import type { Request, Response } from "express";
import { getAllWords } from "../services/wordService.js";

export async function getWords(_req: Request, res: Response) {
  const words = await getAllWords();

  res.json(words);
}
