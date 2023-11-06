"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Localization_1 = require("../controllers/Localization");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Localization_2 = require("../controllers/Localization");
router.post("/localization", Localization_2.LocalUploads.single("file"), Localization_1.CreateLocalizationRequest);
exports.default = router;
