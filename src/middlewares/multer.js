import multer  from "multer";
import moment from "moment";
import path from "path";

const time = moment();
const uploadNone = multer();

const uploadImage = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "images/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

export {
  uploadNone,
  uploadImage,
}