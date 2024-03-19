import Image from "next/image";
import React, { FC } from "react";
import Button from "./ui/Button";
import { useFormContext } from "react-hook-form";
import { FormType } from "@/types";

interface ConfirmedProps {
  setIsConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Confirmed: FC<ConfirmedProps> = ({ setIsConfirmed }) => {
  const { getValues, reset } = useFormContext<FormType>();
  const cardholder = getValues("cardholder");

  const handleClick = () => {
    setIsConfirmed(false);
    reset();
  };

  return (
    <section className="text-center space-y-4 flex flex-col items-center justify-center">
      <Image
        src="/images/icon-complete.svg"
        alt="completed-icon"
        width={100}
        height={100}
      />
      <h1 className="text-3xl font-medium tracking-wider">THANK YOU!</h1>
      <p>We&apos;ve added your card details</p>
      <p>{cardholder}</p>
      <Button type="button" onClick={handleClick}>
        Add another card
      </Button>
    </section>
  );
};

export default Confirmed;
