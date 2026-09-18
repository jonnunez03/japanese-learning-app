import express from "express";
import healthRoutes from "./routes/healthRoutes.js";
import wordRoutes from "./routes/wordRoutes.js";

const app = express();

app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api", wordRoutes);

export default app;
