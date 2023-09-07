import { Router } from "express";

// import controllers
import { getStageOneTask } from "../controllers/stage_one_task.controller.js";

const router = Router();

// define routes
router.get("/api", getStageOneTask);

export default router;
