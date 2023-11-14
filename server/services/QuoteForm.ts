import { QuoteFormDto } from "../model/QuoteForm";
import QuoteForm from "../model/QuoteForm";

export const createQuoteForm = (data: QuoteFormDto) => {
  return QuoteForm.create(data);
};
