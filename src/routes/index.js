import express from "express";

import * as indexController from "../controllers/index.js";

const router = express.Router();

router.get("/", indexController.indexRender);
router.get("/join", indexController.joinRender);
router.get("/main", indexController.mainRender);
router.get("/profile", indexController.profileRender);
router.get("/test", indexController.test);

export default router;