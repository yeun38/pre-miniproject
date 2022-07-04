import express from "express";

import * as indexController from "../controllers/index.js";

const router = express.Router();

router.get("/", indexController.indexRender);
router.get("/join", indexController.joinRender);
router.get("/login", indexController.loginRender);
router.get("/profile", indexController.profileRender);
router.get("/test", indexController.test);

export default router;