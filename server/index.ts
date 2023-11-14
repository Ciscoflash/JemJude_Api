require("dotenv").config();
import express from "express";
const app = express();
const port: number = 3001 || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import router from "./routes/Translation";
import Localization from "./routes/Localization";
import contactRouter from "./routes/Contactus";
import careerRouter from "./routes/Career";
import quoteRouter from "./routes/QuoteForm";
import connect from "./config/Database";
import path from "path";
import cors from "cors";
import axios from "axios";
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
app.use("/api/v1", quoteRouter);

app.post("/validateRecaptcha", async (req, res) => {
  try {
    const { recaptchaToken, recaptchaText } = req.body;
    // console.log(recaptchaToken, recaptchaText);
    if (!recaptchaToken) {
      return res.status(400).json("Recaptcha token is required");
    }
    const secretKey = process.env.GOOGLECAPTCHA_SECRET;
    const { data, status, statusText } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`
    );
    if (data.success) {
      // continue some model save operations
      console.log("Demo Model saved");
      return res.json({ data, status, statusText });
    } else {
      console.log("Demo Model saved failed");
      return res.status(400).json({ data, message: "Invalid recapthca" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ error: error });
  }
});

app.get("*", (req, res) => {
  return res.send("Request not found");
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
