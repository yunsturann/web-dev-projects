"use client";
import { TAddOnsItem } from "@/types/types";
import { createContext, useContext, useState } from "react";

export { useContext };

export type FormContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isMonthly: boolean;
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>;
  activePlanIndex: number;
  setActivePlanIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedAddOns: TAddOnsItem[];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<TAddOnsItem[]>>;
};

export const FormContext = createContext<FormContextType>({
  step: 1, // default value not important
  setStep: () => {},
  isMonthly: true,
  setIsMonthly: () => {},
  activePlanIndex: 0,
  setActivePlanIndex: () => {},
  selectedAddOns: [],
  setSelectedAddOns: () => {},
});

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [step, setStep] = useState(3);
  const [isMonthly, setIsMonthly] = useState(true);
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState<TAddOnsItem[]>([]);

  return (
    <FormContext.Provider
      value={{
        step,
        setStep,
        isMonthly,
        setIsMonthly,
        activePlanIndex,
        setActivePlanIndex,
        selectedAddOns,
        setSelectedAddOns,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
