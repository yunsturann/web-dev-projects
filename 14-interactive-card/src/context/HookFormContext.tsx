import { FormType, formSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const initialFormValues: FormType = {
  cardholder: "",
  cardNumber: "",
  expDate: {
    month: "",
    year: "",
  },
  cvc: "",
};

const HookFormContext = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: initialFormValues,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default HookFormContext;
