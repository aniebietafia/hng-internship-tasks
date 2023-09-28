import path from "path";
import { StatusCodes } from "http-status-codes";

/**
 * @description Controller to upload video file to server
 * @function uploadVideo
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} - response object with video url
 */

export const uploadVideo = async (req, res) => {
  try {
    const baseUrl = `http://localhost:${process.env.PORT}/api/video`;
    if (!req.file) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Please upload a video file",
      });
    }

    const videoUrl = `${baseUrl}/${req.file.filename}`;
    return res.status(StatusCodes.OK).json({
      message: "Video uploaded successfully",
      videoUrl,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error occurred while uploading video!",
      error: error.message,
    });
  }
};

/**
 * @description Controller to serve video file to client
 * @function getVideo
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} - response object with video file
 */

export const getVideo = async (req, res) => {
  try {
    const { filename } = req.params;
    const videoPath = path.join("uploads", filename);

    return res.status(StatusCodes.OK).sendFile(videoPath, {
      root: ".",
      headers: {
        "Content-Type": "video/mp4",
      },
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error occurred while getting video!",
      error: error.message,
    });
  }
};
