"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TranslationSchema = new mongoose_1.default.Schema({
    projectRequirement: {
        type: String,
        required: true,
    },
    docType: {
        type: String,
    },
    file: {
        type: String,
    },
    specialism: {
        type: String,
    },
    srcLanguage: {
        type: String,
    },
    targetLanguage: {
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
const Translation = mongoose_1.default.model("Translation", TranslationSchema);
exports.default = Translation;
