"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const Translation_1 = __importDefault(require("./routes/Translation"));
const Localization_1 = __importDefault(require("./routes/Localization"));
const Contactus_1 = __importDefault(require("./routes/Contactus"));
const Database_1 = __importDefault(require("./config/Database"));
const path_1 = __importDefault(require("path"));
(0, Database_1.default)();
app.get("/", (req, res) => {
    res.send("Welcome To Landbirds");
});
app.use("/path", express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use("/api/v1", Translation_1.default);
app.use("/api/v1", Localization_1.default);
app.use("/api/v1", Contactus_1.default);
app.get("*", (req, res) => {
    return res.send("Request not found");
});
app.listen(port, () => {
    console.log("listening on port " + port);
});
