import express from "express";

import * as authController from "../controllers/auth.js";

import * as multer from "../middlewares/multer.js";

const router = express.Router();

router.post("/join", multer.uploadImage.single("img"), authController.authJoin);
router.post("/login", authController.authLogin);
router.get("/logout", authController.authLogout);

export default router;