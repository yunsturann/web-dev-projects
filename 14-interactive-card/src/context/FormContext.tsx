"use client";
// is an example of a custom hook that uses the useContext hook to access the FormContext.
import { FormContextType, FormType } from "@/types";
import { createContext, useContext, useState } from "react";

const FormContext = createContext<FormContextType>({});

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [form, setForm] = useState<FormType>();

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => {
  return useContext(FormContext);
};
