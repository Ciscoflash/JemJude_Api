"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const resend_1 = require("resend");
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
const sendEmail = (data) => {
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
exports.default = sendEmail;
