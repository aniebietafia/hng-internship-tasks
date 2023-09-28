import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

const app = express();

// import routes
import uploadRouter from "./routes/upload.route.js";

// express middleware
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express routes
app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨Welcome! Upload a Video 🌈✨🦄",
  });
});

// mount routers
app.use("/api", uploadRouter);

export default app;
