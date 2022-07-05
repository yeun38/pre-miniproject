import express from "express";

import * as postController from "../controllers/post.js";

import * as multer from "../middlewares/multer.js";

const router = express.Router();

router.post("/create", multer.uploadImage.array("many"), postController.postCreate);
router.get("/delete/:id", postController.postDelete);
router.get("/get", postController.postGet);

export default router;