import express from "express";
import healthRoutes from "./routes/healthRoutes.js";
import wordRoutes from "./routes/wordRoutes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api", wordRoutes);

export default app;
