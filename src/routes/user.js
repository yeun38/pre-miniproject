import express from "express";

import * as userController from "../controllers/user.js";
import * as multer from "../middlewares/multer.js";

const router = express.Router();

router.post("/update/:id", userController.userUpdatePass);
router.post("/image/:id", multer.uploadImage.single("profile"), userController.userUpdateImage);

export default router;