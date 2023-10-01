import { Schema, model } from "mongoose";

const VideoSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const Video = model("Video", VideoSchema);

export default Video;
