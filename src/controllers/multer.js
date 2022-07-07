import multer from "multer";
import path from "path";
import fs from "fs";

const uploadImage = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "images/");
    },
    filename(req, file, done) {
      done(null, file.originalname + Date.now());
    },
  }),
  fileFilter: (req, file, done) => {
    if (file.mimetype === "image/png") {
      done(null, true);
    } else {
      done(null, false);
    }
  },
});

const render = async (req, res, next) => {
  return res.render("multer");
}

const upload = async (req, res, next) => {
  console.log(req.body);
  console.log(req.file);
  res.end();
} 

export {
  render,
  upload,
  uploadImage,
}