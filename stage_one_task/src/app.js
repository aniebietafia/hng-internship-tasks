// import modules
import express from "express";

// import routes
import stageOneTaskRoutes from "./routes/stage_one_task.route.js";

// create express app
const app = express();

// set up middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mount routes
app.use(stageOneTaskRoutes);

// export app
export default app;
