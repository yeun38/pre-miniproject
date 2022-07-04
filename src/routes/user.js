import express from "express";
import multer from "multer";

const upload = multer();

import * as userController from "../controllers/user.js";

// import * as multer from "../middlewares/multer.js";

const router = express.Router();

router.post("/update/:id", userController.userUpdatePass);
router.post("/image/:id", upload.none(), userController.userUpdateImage);

export default router;