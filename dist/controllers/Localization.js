"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLocalizationRequest = exports.LocalUploads = void 0;
const Localization_1 = require("../services/Localization");
const fs = require("fs");
const multer_1 = __importDefault(require("multer"));
const resend_1 = __importDefault(require("../utils/resend"));
// these is to accept files
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./public");
    },
    filename: function (req, file, cb) {
        // return cb(null, `${Date.now()}_${file.originalname}`);
        return cb(null, `${file.originalname}`);
    },
});
exports.LocalUploads = (0, multer_1.default)({ storage });
const CreateLocalizationRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const data = req.body;
        const file = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        // Specify the file path
        const filePath = (_b = req.file) === null || _b === void 0 ? void 0 : _b.path; // Replace with the actual file path
        let bufferContent;
        // Read the file and convert it to a Buffer
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error("Error reading the file:", err);
            }
            else {
                bufferContent = data;
            }
        });
        const LocalizationData = Object.assign(Object.assign({}, data), { file }); // these is to combine the value of data and filename
        // console.log(LocalizationData); //
        const Localization = yield (0, Localization_1.createLocalization)(LocalizationData);
        if (Localization) {
            (0, resend_1.default)({
                receiver: "abrahamjude1999@gmail.com",
                title: "New Quotation Alert",
                description: `
      <!DOCTYPE html>
<html
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }

      p {
        line-height: inherit;
      }

      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }

      .image_block img + div {
        display: none;
      }

      @media (max-width: 700px) {
        .desktop_hide table.icons-inner,
        .social_block.desktop_hide .social-table {
          display: inline-block !important;
        }

        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }

        .mobile_hide {
          display: none;
        }

        .row-content {
          width: 100% !important;
        }

        .stack .column {
          width: 100%;
          display: block;
        }

        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
  </head>

  <body
    style="
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      class="nl-container"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #f9f9f9;
      "
    >
      <tbody>
        <tr>
          <td>
            <table
              class="row row-1"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #5d77a9;
                        color: #000;
                        width: 680px;
                        margin: 0 auto;
                      "
                      width="680"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="empty_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div></div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              class="row row-2"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #250a75;
                        color: #000;
                        width: 680px;
                        margin: 0 auto;
                      "
                      width="680"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 20px;
                              padding-top: 20px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="heading_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: Arial, Helvetica Neue,
                                        Helvetica, sans-serif;
                                      font-size: 38px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    <span class="tinyMce-placeholder"
                                      >JEMJUDE GLOBAL BRIDGE</span
                                    >
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="image_block block-2"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad" style="width: 100%">
                                  <div
                                    class="alignment"
                                    align="center"
                                    style="line-height: 10px"
                                  >
                                    <img
                                      src="https://1afa352be5.imgdist.com/public/users/Integrators/BeeProAgency/1086262_1071617/success-motivation-strategy-arrows-3227625.jpg"
                                      style="
                                        display: block;
                                        height: auto;
                                        border: 0;
                                        max-width: 680px;
                                        width: 100%;
                                      "
                                      width="680"
                                      alt="Check Icon"
                                      title="Check Icon"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="paragraph_block block-3"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 25px;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #ffffff;
                                      font-family: Georgia, Times,
                                        'Times New Roman', serif;
                                      font-size: 42px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 50.4px;
                                    "
                                  >
                                    <p style="margin: 0">New Quote Alert</p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="paragraph_block block-4"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-left: 30px;
                                    padding-right: 30px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #2f2f2f;
                                      font-family: Arial, Helvetica Neue,
                                        Helvetica, sans-serif;
                                      font-size: 14px;
                                      line-height: 150%;
                                      text-align: center;
                                      mso-line-height-alt: 21px;
                                    "
                                  >
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      &nbsp;
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="heading_block block-5"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: Arial, Helvetica Neue,
                                        Helvetica, sans-serif;
                                      font-size: 38px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    <span class="tinyMce-placeholder"
                                      >HI WELCOME</span
                                    >
                                  </h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              class="row row-3"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #fff;
                        color: #000;
                        width: 680px;
                        margin: 0 auto;
                      "
                      width="680"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 20px;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    padding-top: 50px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #2f2f2f;
                                      font-family: Arial, Helvetica Neue,
                                        Helvetica, sans-serif;
                                      font-size: 35px;
                                      font-weight: 700;
                                      letter-spacing: 1px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 42px;
                                    "
                                  >
                                    <p style="margin: 0">Quote Details</p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              class="row row-4"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #fff;
                        color: #000;
                        width: 680px;
                        margin: 0 auto;
                      "
                      width="680"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="50%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 10px;
                                    padding-left: 10px;
                                    padding-right: 20px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #250a75;
                                      font-family: Arial, Helvetica Neue,
                                        Helvetica, sans-serif;
                                      font-size: 16px;
                                      line-height: 200%;
                                      text-align: right;
                                      mso-line-height-alt: 32px;
                                    "
                                  >
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <strong
                                        ><span
                                          ><span style="color: #5d77a9"
                                            >Project Requirement</span
                                          ></span
                                        ></strong
                                      >
                                    </p>
                                   
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <strong
                                        ><span
                                          ><span style="color: #5d77a9"
                                            >File</span
                                          ></span
                                        ></strong
                                      >
                                    </p>
                                   ${Localization.designType
                    ? ` <p
                                    style="margin: 0; word-break: break-word"
                                  >
                                    <strong
                                      ><span
                                        ><span style="color: #5d77a9"
                                          >Design Type</span
                                        ></span
                                      ></strong
                                    >
                                  </p>`
                    : " "}
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <strong
                                        ><span
                                          ><span style="color: #5d77a9"
                                            >Specialism</span
                                          ></span
                                        ></strong
                                      >
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <strong
                                        ><span
                                          ><span style="color: #5d77a9"
                                            >Description</span
                                          ></span
                                        ></strong
                                      >
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <strong
                                        ><span
                                          ><span style="color: #5d77a9"
                                            >Target Language</span
                                          ></span
                                        ></strong
                                      >
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <strong
                                        ><span
                                          ><span style="color: #5d77a9"
                                            >First Name</span
                                          ></span
                                        ></strong
                                      >
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <strong
                                        ><span
                                          ><span style="color: #5d77a9"
                                            >Last Name</span
                                          ></span
                                        ></strong
                                      >
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <strong
                                        ><span
                                          ><span style="color: #5d77a9"
                                            >Company Name</span
                                          ></span
                                        ></strong
                                      >
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <strong
                                        ><span
                                          ><span style="color: #5d77a9"
                                            >Email</span
                                          ></span
                                        ></strong
                                      >
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <strong
                                        ><span
                                          ><span style="color: #5d77a9"
                                            >Phone</span
                                          ></span
                                        ></strong
                                      >
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <strong
                                        ><span
                                          ><span style="color: #5d77a9"
                                            >Contact Channel</span
                                          ></span
                                        ></strong
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td
                            class="column column-2"
                            width="50%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 10px;
                                    padding-left: 20px;
                                    padding-right: 10px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #2f2f2f;
                                      font-family: Arial, Helvetica Neue,
                                        Helvetica, sans-serif;
                                      font-size: 16px;
                                      line-height: 200%;
                                      text-align: left;
                                      mso-line-height-alt: 32px;
                                    "
                                  >
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <span>${Localization.projectRequirement}</span>
                                    </p>
                                   
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      ${Localization.file}
                                    </p>
                                   ${Localization.designType
                    ? `  <p
                                    style="margin: 0; word-break: break-word"
                                  >
                                    ${Localization.designType}
                                  </p>`
                    : ""}
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                     ${Localization.specialism}
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      ${Localization.description}
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                     ${Localization.targetLanguage}
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      ${Localization.firstName}
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      ${Localization.lastName}
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                     ${Localization.companyName}
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                     ${Localization.email}
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                     ${Localization.phone}
                                    </p>
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      ${Localization.contactChannel}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              class="row row-5"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #fff;
                        color: #000;
                        width: 680px;
                        margin: 0 auto;
                      "
                      width="680"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="empty_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div></div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              class="row row-6"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #250a75;
                        color: #000;
                        width: 680px;
                        margin: 0 auto;
                      "
                      width="680"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <div
                              class="spacer_block block-1"
                              style="
                                height: 20px;
                                line-height: 20px;
                                font-size: 1px;
                              "
                            >
                              &#8202;
                            </div>
                            <table
                              class="social_block block-2"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div class="alignment" align="center">
                                    <table
                                      class="social-table"
                                      width="108px"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        display: inline-block;
                                      "
                                    >
                                      <tr>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.facebook.com"
                                            target="_blank"
                                            ><img
                                              src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/facebook@2x.png"
                                              width="32"
                                              height="32"
                                              alt="Facebook"
                                              title="Facebook"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.twitter.com"
                                            target="_blank"
                                            ><img
                                              src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/twitter@2x.png"
                                              width="32"
                                              height="32"
                                              alt="Twitter"
                                              title="Twitter"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.instagram.com"
                                            target="_blank"
                                            ><img
                                              src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png"
                                              width="32"
                                              height="32"
                                              alt="Instagram"
                                              title="Instagram"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              class="row row-7"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #5d77a9;
                        color: #000;
                        width: 680px;
                        margin: 0 auto;
                      "
                      width="680"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 20px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #cfceca;
                                      font-family: Arial, Helvetica Neue,
                                        Helvetica, sans-serif;
                                      font-size: 12px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 14.399999999999999px;
                                    "
                                  >
                                    <p
                                      style="margin: 0; word-break: break-word"
                                    >
                                      <span>2023 © All Rights Reserved</span>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              class="row row-8"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-color: #ffffff;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #fff;
                        color: #000;
                        width: 680px;
                        margin: 0 auto;
                      "
                      width="680"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="icons_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    vertical-align: middle;
                                    color: #1e0e4b;
                                    font-family: 'Inter', sans-serif;
                                    font-size: 15px;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    text-align: center;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                  >
                                    <tr>
                                      <td
                                        class="alignment"
                                        style="
                                          vertical-align: middle;
                                          text-align: center;
                                        "
                                      >
                                        <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                        <!--[if !vml]><!-->
                                        <table
                                          class="icons-inner"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            display: inline-block;
                                            margin-right: -4px;
                                            padding-left: 0px;
                                            padding-right: 0px;
                                          "
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation"
                                        >
                                          <!--<![endif]-->
                                          <tr>
                                            <td
                                              style="
                                                vertical-align: middle;
                                                text-align: center;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                                padding-left: 5px;
                                                padding-right: 6px;
                                              "
                                            >
                                              <a
                                                href="http://designedwithbeefree.com/"
                                                target="_blank"
                                                style="text-decoration: none"
                                                ><img
                                                  class="icon"
                                                  alt="Beefree Logo"
                                                  src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png"
                                                  height="32"
                                                  width="34"
                                                  align="center"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    margin: 0 auto;
                                                    border: 0;
                                                  "
                                              /></a>
                                            </td>
                                            <td
                                              style="
                                                font-family: 'Inter', sans-serif;
                                                font-size: 15px;
                                                color: #1e0e4b;
                                                vertical-align: middle;
                                                letter-spacing: undefined;
                                                text-align: center;
                                              "
                                            >
                                              <a
                                                href="http://designedwithbeefree.com/"
                                                target="_blank"
                                                style="
                                                  color: #1e0e4b;
                                                  text-decoration: none;
                                                "
                                                >Designed with Beefree</a
                                              >
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </body>
</html>

      `,
                attarchment: file,
                buffer: bufferContent,
            });
        }
        return res.json({
            code: 200,
            status: "success",
            data: Localization,
        });
    }
    catch (error) {
        return res.json({ error: error });
    }
});
exports.CreateLocalizationRequest = CreateLocalizationRequest;
