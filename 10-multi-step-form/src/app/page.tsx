"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import StepLayout from "@/components/step/StepLayout";
import {
  StepContext,
  StepContextType,
  useContext,
} from "@/contexts/StepContext";
import Step1 from "@/components/step/Step1";
import Step2 from "@/components/step/Step2";
import Step3 from "@/components/step/Step3";
import Step4 from "@/components/step/Step4";

export default function Home() {
  const { step } = useContext<StepContextType>(StepContext);

  return (
    <section className="w-full max-w-[375px] sm:max-w-[1440px] bg-white h-[75%] rounded-2xl p-8 flex ">
      <Sidebar step={step} />
      <StepLayout>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </StepLayout>
    </section>
  );
}
