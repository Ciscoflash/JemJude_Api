"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocalization = void 0;
const Localization_1 = __importDefault(require("../model/Localization"));
const createLocalization = (data) => {
    return Localization_1.default.create(data);
};
exports.createLocalization = createLocalization;
