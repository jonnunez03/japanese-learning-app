import { Router } from "express";
import { getWords } from "../controllers/wordController.js";

const router = Router();

router.get("/words", getWords);

export default router;
