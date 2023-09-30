import { Router } from "express";

// import controllers
import { uploadVideo, getVideo } from "../controller/upload.controller.js";
import upload from "../config/multer.config.js";

const router = Router();

// routes
router.post("/upload", upload.single("video"), uploadVideo);
router.get("/video/:filename", getVideo);

export default router;
