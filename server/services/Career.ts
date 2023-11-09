import { CareerDto } from "../model/Career";
import Career from "../model/Career";

export const CreateCareer = (input: CareerDto) => {
  return Career.create(input);
};
