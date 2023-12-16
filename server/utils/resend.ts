require("dotenv").config();
import { Resend } from "resend";
import fs from "fs";
const resend = new Resend(process.env.RESEND_API_KEY);
interface emailData {
  receiver: string[];
  title: string;
  description: string;
  attarchment?: any;
  path?: any;
}

const sendEmail = async (data: emailData) => {
  resend.emails.send({
    from: "contactjemjudegmail.com@resend.dev",
    // from: "contactjemjudglobal.com@resend.dev",
    to: `${data.receiver}`,
    subject: `${data.title}`,
    html: `${data.description}`,
    attachments: [
      {
        filename: `${data.attarchment}`,
        content: await fs.promises.readFile(`${data.path}`),
      },
    ],
    headers: {
      "X-Entity-Ref-ID": "123456789",
    },
  });
};

export default sendEmail;
