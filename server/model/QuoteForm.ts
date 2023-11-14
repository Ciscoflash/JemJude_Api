import mongoose from "mongoose";

export interface QuoteFormDto extends mongoose.Document {
  serviceType: string;
  fullname: string;
  email: string;
  phone: string;
  language: string;
  file: string;
  companyType: string;
  industory: string;
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
  },
  file: {
    type: String,
  },
  companyType: {
    type: String,
  },
  industory: {
    type: String,
  },
  message: {
    type: String,
  },
});

const QuoteForm = mongoose.model<QuoteFormDto>("QuoteForm", QuoteFormSchema);

export default QuoteForm;
