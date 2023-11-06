import mongoose from "mongoose";

export interface TranslationDto extends mongoose.Document {
  projectRequirement?: string;
  docType?: string;
  file?: string;
  specialism?: string;
  srcLanguage?: string;
  targetLanguage?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  contactChannel?: string;
}

const TranslationSchema = new mongoose.Schema({
  projectRequirement: {
    type: String,
    required: true,
  },
  docType: {
    type: String,
  },
  file: {
    type: String,
  },
  specialism: {
    type: String,
  },
  srcLanguage: {
    type: String,
  },
  targetLanguage: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  companyName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  contactChannel: {
    type: String,
  },
});

const Translation = mongoose.model<TranslationDto>(
  "Translation",
  TranslationSchema
);

export default Translation;
