import mongoose from "mongoose";

export interface LocalizationDto extends mongoose.Document {
  projectRequirement?: string;
  file?: string;
  designType?: string;
  targetLanguage?: string;
  specialism?: string;
  message?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  contactType?: string;
  otherprojectRequirement?: string;
  otherSpecialism?: string;
}

const LocalizationSchema = new mongoose.Schema({
  projectRequirement: {
    type: String,
    required: true,
  },
  file: {
    type: String,
  },
  designType: {
    type: String,
  },
  specialism: {
    type: String,
  },
  targetLanguage: {
    type: String,
  },
  message: {
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
  contactType: {
    type: String,
  },
  otherprojectRequirement: {
    type: String,
  },
  otherSpecialism: {
    type: String,
  },
});

const Localization = mongoose.model<LocalizationDto>(
  "Localization",
  LocalizationSchema
);

export default Localization;
