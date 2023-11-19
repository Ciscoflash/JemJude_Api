import { CreateTranslationRequest } from "../controllers/Translation";
import express from "express";
const router = express.Router();
import { LocalUploads } from "../controllers/Localization";
router.post(
  "/translation",
  LocalUploads.single("file"),
  CreateTranslationRequest
);
export default router;
