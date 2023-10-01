import { Router } from "express";
import { postVideoStream, getVideoStream } from "../controller/video.controller.js";
import upload from "../config/multer.config.js";

const router = Router();

router.route("/video").post(upload.single("video"), postVideoStream);
router.route("/:videoId").get(getVideoStream);

export default router;
