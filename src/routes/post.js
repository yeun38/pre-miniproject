import express from "express";

import * as postController from "../controllers/post.js";

import * as multer from "../middlewares/multer.js";

const router = express.Router();

router.post("/create", multer.uploadImage.array("many"), postController.postCreate);

export default router;