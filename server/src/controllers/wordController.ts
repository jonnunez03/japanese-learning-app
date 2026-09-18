import type { Request, Response } from "express";
import { getAllWords } from "../services/wordService.js";

export function getWords(_req: Request, res: Response) {
  const words = getAllWords();

  res.json(words);
}
