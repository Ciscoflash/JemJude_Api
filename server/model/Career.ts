import mongoose from "mongoose";

export interface CareerDto extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  cv: any;
  role: string;
  file: any;
}

const CareerSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  country: {
    type: String,
  },
  cv: {
    type: String,
  },
  role: {
    type: String,
  },
  file: String,
});

const Career = mongoose.model("Career", CareerSchema);

export default Career;
