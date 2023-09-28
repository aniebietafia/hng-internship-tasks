import path from "path";
import { Router } from "express";
import multer from "multer";

// set up storage for uploaded video files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

// set up multer
const upload = multer({ storage });

// import controllers
import { uploadVideo, getVideo } from "../controller/upload.controller.js";

const router = Router();

// routes
router.post("/upload", upload.single("video"), uploadVideo);
router.get("/video/:filename", getVideo);

export default router;
