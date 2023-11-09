import express from "express";
const router = express.Router();
import { createCarear } from "../controllers/Career";
import { LocalUploads } from "../controllers/Localization";
router.post("/career", LocalUploads.single("file"), createCarear);

export default router;
