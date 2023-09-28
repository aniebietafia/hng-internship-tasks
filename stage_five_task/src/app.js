import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

const app = express();

// import routes

// express middleware
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express routes
app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨Hello World! 🌈✨🦄",
  });
});

// mount routers

export default app;
