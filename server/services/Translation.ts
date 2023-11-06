import Translation, { TranslationDto } from "../model/Translation";
export const CreateTranscription = (input: TranslationDto) => {
  return Translation.create(input);
};
