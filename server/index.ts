import express from "express";
const app = express();
const port: number = 3001 || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import router from "./routes/Translation";
import Localization from "./routes/Localization";
import contactRouter from "./routes/Contactus";
import careerRouter from "./routes/Career";
import { CreateTranscription } from "./services/Translation";
import connect from "./config/Database";
import path from "path";
import cors from "cors";
connect();
const allowedOrigins = [
  "http://localhost:5173",
  "https://translation-services-topaz.vercel.app/",
];
app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.get("/", (req, res) => {
  res.send("Welcome To Landbirds");
});
app.use("/path", express.static(path.join(__dirname, "../public")));
app.use("/api/v1", router);

app.use("/api/v1", Localization);
app.use("/api/v1", contactRouter);
app.use("/api/v1", careerRouter);
app.get("*", (req, res) => {
  return res.send("Request not found");
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
