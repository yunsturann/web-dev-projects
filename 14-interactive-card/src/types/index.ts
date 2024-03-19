import { z } from "zod";

export const formSchema = z.object({
  cardholder: z.string().min(1, "Can't be blank"),
  cardNumber: z
    .string()
    .length(19, "Only 16 digits")
    .regex(/^\d{4} \d{4} \d{4} \d{4}$/, "Only digits and space"),
  expDate: z.object({
    month: z
      .string()
      .length(2, "Can't be blank")
      .regex(/^\d+$/, "Only digits are allowed"),
    year: z
      .string()
      .length(2, "Can't be blank")
      .regex(/^\d+$/, "Only digits are allowed"),
  }),
  cvc: z
    .string()
    .length(3, "Only 3 digits")
    .regex(/^\d+$/, "Only digits are allowed"),
});

export type FormType = z.infer<typeof formSchema>;

export declare type FormContextType = {
  form?: FormType;
  setForm?: React.Dispatch<React.SetStateAction<FormType | undefined>>;
};
