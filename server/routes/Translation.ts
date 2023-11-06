import { CreateTranslationRequest } from "../controllers/Translation";
import express from "express";
const router = express.Router();
import { upload } from "../controllers/Translation";
router.post("/translation", upload.single("file"), CreateTranslationRequest);
export default router;
