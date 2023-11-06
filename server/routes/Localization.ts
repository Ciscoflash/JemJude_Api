import { CreateLocalizationRequest } from "../controllers/Localization";
import express from "express";
const router = express.Router();
import { LocalUploads } from "../controllers/Localization";
router.post(
  "/localization",
  LocalUploads.single("file"),
  CreateLocalizationRequest
);

export default router;
