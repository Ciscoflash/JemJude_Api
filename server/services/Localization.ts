import { LocalizationDto } from "../model/Localization";
import Localization from "../model/Localization";

export const createLocalization = (data: LocalizationDto) => {
  return Localization.create(data);
};
