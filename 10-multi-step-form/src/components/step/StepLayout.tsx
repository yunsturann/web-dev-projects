import React, { ReactNode } from "react";
import { stepItems } from "@/constants/constants";
import {
  FormContext,
  FormContextType,
  useContext,
} from "@/contexts/FormContext";
import Button, { buttonVariants } from "../ui/Button";

const StepLayout = ({ children }: { children?: ReactNode }) => {
  const { step, setStep } = useContext<FormContextType>(FormContext);

  const { title, desc } = stepItems[step - 1];

  const isLastStep = stepItems.length === step;
  const isFirstStep = step === 1;

  const handleNext = () => {
    if (isLastStep) {
      setStep(5);
    } else {
      setStep(step + 1);
    }
  };
  const handleBack = () => {
    if (isFirstStep) {
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className=" h-full w-full lg:w-[70%] px-24 py-4 flex justify-center items-center ">
      {/* CONTAINER*/}
      <div className=" w-full h-full  flex flex-col space-y-6">
        {/* HEADER */}
        <header>
          <h1 className="text-marine-blue text-3xl font-bold">{title}</h1>
          <p className="text-cool-gray font-semibold">{desc}</p>
        </header>
        {/* CONTENT */}
        <div className="flex-1 pt-4">{children}</div>

        {/* FOOTER / BUTTONS */}
        <div className="flex items-center justify-between">
          {/* BACK BUTTON*/}
          {!isFirstStep && (
            <span
              onClick={handleBack}
              className={buttonVariants({
                variant: "outline",
                className: "cursor-pointer",
              })}
            >
              Go Back
            </span>
          )}
          {/* NEXT & CONFIRM BUTTON */}
          <Button
            size="lg"
            onClick={handleNext}
            className="ml-auto bg-marine-blue hover:bg-purplish-blue"
          >
            {isLastStep ? "Confirm" : "Next Step"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepLayout;
