require("dotenv").config();
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
interface emailData {
  receiver: string;
  title: string;
  description: string;
  attarchment?: any;
  buffer?: any;
}
const sendEmail = (data: emailData) => {
  resend.emails.send({
    from: "jemjudeglobalbridge@resend.dev",
    to: `${data.receiver}`,
    subject: `${data.title}`,
    html: `${data.description}`,
    attachments: [
      {
        filename: `${data.attarchment}`,
        content: `${data.buffer}`,
      },
    ],
    headers: {
      "X-Entity-Ref-ID": "123456789",
    },
  });
};

export default sendEmail;
