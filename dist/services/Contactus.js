"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactus = void 0;
const ContactUs_1 = __importDefault(require("../model/ContactUs"));
const CreateContactus = (input) => {
    return ContactUs_1.default.create(input);
};
exports.CreateContactus = CreateContactus;
