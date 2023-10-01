import multer from "multer";

export default multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.match(/mp4|mkv|avi|webm$i/)) {
      cb(new Error("File is not supported"), false);
      return;
    }

    cb(null, true);
  },
});
