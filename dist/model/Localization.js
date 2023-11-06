"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LocalizationSchema = new mongoose_1.default.Schema({
    projectRequirement: {
        type: String,
        required: true,
    },
    file: {
        type: String,
    },
    designType: {
        type: String,
    },
    specialism: {
        type: String,
    },
    targetLanguage: {
        type: String,
    },
    description: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    companyName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    contactChannel: {
        type: String,
    },
});
const Localization = mongoose_1.default.model("Localization", LocalizationSchema);
exports.default = Localization;
