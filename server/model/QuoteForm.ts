import mongoose from "mongoose";

export interface QuoteFormDto extends mongoose.Document {
  serviceType: string;
  fullname: string;
  email: string;
  phone: string;
  language: string;
  file: string;
  companyType: string;
  industry: string;
  srcLanguage: string;
  targetLanguage: string;
  message: string;
}

const QuoteFormSchema = new mongoose.Schema({
  serviceType: {
    type: String,
  },
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  language: {
    type: String,
    default: "Not Applicable",
  },
  file: {
    type: String,
  },
  companyType: {
    type: String,
  },
  industry: {
    type: String,
  },
  srcLanguage: {
    type: String,
  },
  targetLanguage: {
    type: String,
  },
  message: {
    type: String,
  },
});

const QuoteForm = mongoose.model<QuoteFormDto>("QuoteForm", QuoteFormSchema);

export default QuoteForm;
