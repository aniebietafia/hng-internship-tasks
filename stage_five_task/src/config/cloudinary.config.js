import { v2 as cloudinary } from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
import { config } from "dotenv";
config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer configuration
// export const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "HNG",
//     allowed_formats: ["mp4", "avi", "mkv", "webm"],
//   },
// });

export default cloudinary;
