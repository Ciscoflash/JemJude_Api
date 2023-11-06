import express from "express";
const contactRouter = express.Router();
import { contactUsRoute } from "../controllers/Contactus";

contactRouter.post("/contact-us", contactUsRoute);
export default contactRouter;
