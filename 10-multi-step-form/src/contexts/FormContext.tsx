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
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  setPersonalInfo: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone: string;
    }>
  >;
  resetAllForm: () => void;
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
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  setPersonalInfo: () => {},
  resetAllForm: () => {},
});

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [step, setStep] = useState(1);
  const [isMonthly, setIsMonthly] = useState(true);
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState<TAddOnsItem[]>([]);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const resetAllForm = () => {
    setStep(1);
    setIsMonthly(true);
    setActivePlanIndex(0);
    setSelectedAddOns([]);
    setPersonalInfo({
      name: "",
      email: "",
      phone: "",
    });
  };

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
        personalInfo,
        setPersonalInfo,
        resetAllForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
