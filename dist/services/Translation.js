"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTranscription = void 0;
const Translation_1 = __importDefault(require("../model/Translation"));
const CreateTranscription = (input) => {
    return Translation_1.default.create(input);
};
exports.CreateTranscription = CreateTranscription;
