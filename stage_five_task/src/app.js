import express from "express";
import cors from "cors";
import morgan from "morgan";
// import Deepgram from "@deepgram/sdk";
import { config } from "dotenv";
config();

const app = express();
import videoRoutes from "./route/video.route.js";
// const deepgram = new Deepgram.Deepgram(process.env.DEEPGRAM_API_KEY);

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// mount routes
app.use("/api", videoRoutes);

export default app;
