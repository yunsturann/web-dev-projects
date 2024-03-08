"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import StepLayout from "@/components/step/StepLayout";
import {
  FormContext,
  FormContextType,
  useContext,
} from "@/contexts/FormContext";
import Step1 from "@/components/step/Step1";
import Step2 from "@/components/step/Step2";
import Step3 from "@/components/step/Step3";
import Step4 from "@/components/step/Step4";
import StepConfirmed from "@/components/step/StepConfirmed";

export default function Home() {
  const { step } = useContext<FormContextType>(FormContext);

  return (
    <section className=" w-full sm:max-w-[1440px] bg-white sm:h-[75%] rounded-2xl p-4 sm:p-8 flex flex-col lg:flex-row ">
      {step > 0 && step < 5 && (
        <>
          <Sidebar step={step} />
          <StepLayout>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
          </StepLayout>
        </>
      )}
      {step === 5 && <StepConfirmed />}
    </section>
  );
}
