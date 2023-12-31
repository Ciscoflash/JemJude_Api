"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function connect() {
    mongoose_1.default
        .connect(process.env.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((connection) => {
        console.log("connected to database");
    })
        .catch((error) => {
        console.log(error);
        return console.log({ message: "Error connecting to database" });
    });
}
exports.default = connect;
