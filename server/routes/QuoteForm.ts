import express from "express";
const route = express.Router();
import quoteFormController from "../controllers/QuoteForm";
import { LocalUploads } from "../controllers/Localization";

route.post("/quoteform", LocalUploads.single("file"), quoteFormController);

export default route;
