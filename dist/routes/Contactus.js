"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactRouter = express_1.default.Router();
const Contactus_1 = require("../controllers/Contactus");
contactRouter.post("/contact-us", Contactus_1.contactUsRoute);
exports.default = contactRouter;
