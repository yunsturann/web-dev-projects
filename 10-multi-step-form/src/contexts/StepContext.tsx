"use client";
import { createContext, useContext, useState } from "react";

export { useContext };

export type StepContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const StepContext = createContext<StepContextType>({
  step: 1, // default value not important
  setStep: () => {},
});

export default function StepProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [step, setStep] = useState(1);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
}
