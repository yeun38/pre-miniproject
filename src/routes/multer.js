import express from "express";

import * as multerController from "../controllers/multer.js";

const router = express.Router();

router.get("/", multerController.render);
router.post("/post", multerController.uploadImage.single("image"), multerController.upload);

export default router;