import { ContactusDto } from "../model/ContactUs";
import Contactus from "../model/ContactUs";

export const CreateContactus = (input: ContactusDto) => {
  return Contactus.create(input);
};
