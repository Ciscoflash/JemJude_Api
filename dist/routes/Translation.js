"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Translation_1 = require("../controllers/Translation");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Translation_2 = require("../controllers/Translation");
router.post("/translation", Translation_2.upload.single("file"), Translation_1.CreateTranslationRequest);
exports.default = router;
