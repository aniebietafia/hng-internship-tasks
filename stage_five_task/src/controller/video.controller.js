import fs from "fs";
import { StatusCodes } from "http-status-codes";
import Video from "../model/video.model.js";
import cloudinary from "../config/cloudinary.config.js";

/**
 * @description Get a video stream from the client
 * @route POST /api/video
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - Video stream
 */

export const postVideoStream = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "HNG",
      resource_type: "video",
      overwrite: true,
    });

    // Save video information in the database
    const video = new Video({
      title: req.file.originalname,
      url: result.secure_url,
    });
    await video.save();

    return res.status(StatusCodes.OK).json({
      message: "Video uploaded successfully!",
      video: {
        id: video._id,
        title: video.title,
        url: video.url,
      },
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error occurred while uploading video!",
      error: error.message,
    });
  }
};

/**
 * @description Get specific video from the database
 * @route GET /api/:videoId
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - Single video
 */

export const getVideoStream = async (req, res) => {
  try {
    const { range } = req.headers;
    const { videoId } = req.params;

    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Video not found!",
      });
    }

    const videoPath = video.url;
    const videoSize = fs.statSync(videoPath).size;

    // Parse Range
    // Example: "bytes=32324-"
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));

    // calculate the end byte to send back
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };

    // HTTP Status 206 for Partial Content
    res.writeHead(206, headers);

    // create video read stream for this particular chunk
    const videoStream = fs.createReadStream(videoPath, { start, end });

    // Stream the video chunk to the client
    videoStream.pipe(res);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error occurred while getting video!",
      error: error.message,
    });
  }
};
