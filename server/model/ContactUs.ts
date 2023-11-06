import mongoose from "mongoose";

export interface ContactusDto extends mongoose.Document {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactusSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Contactus = mongoose.model("Contactus", ContactusSchema);
export default Contactus;
