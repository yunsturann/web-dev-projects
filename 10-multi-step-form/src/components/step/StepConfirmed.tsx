import {
  FormContext,
  FormContextType,
  useContext,
} from "@/contexts/FormContext";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const StepConfirmed = () => {
  const { setStep } = useContext<FormContextType>(FormContext);
  return (
    <div className="w-1/2 mx-auto flex flex-col justify-center items-center text-center ">
      <Image
        src={"/images/icon-thank-you.svg"}
        alt="Thank you icon"
        width={80}
        height={80}
      />
      <h2 className="mt-6 text-marine-blue text-2xl sm:text-3xl font-bold">
        Thank you!
      </h2>
      <p className="mt-4 text-gray-400 text-lg   ">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need spport, please feel free to email us at
        eynstrne@gmail.com.
      </p>
      {/* AGAIN */}
      <Button className="mt-6" onClick={() => setStep(1)}>
        Make it again
      </Button>
    </div>
  );
};

export default StepConfirmed;
