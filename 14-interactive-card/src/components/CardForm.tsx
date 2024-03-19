import React, { FC, useEffect } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { FormType } from "@/types";
import { useFormContext } from "react-hook-form";

interface CardFormProps {
  setIsConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardForm: FC<CardFormProps> = ({ setIsConfirmed }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useFormContext<FormType>();

  const { cardNumber } = watch();

  useEffect(() => {
    setValue("cardNumber", formatCardNumber(cardNumber));
  }, [cardNumber, setValue]);

  const onSubmit = (data: FormType) => {
    setIsConfirmed(true);
  };

  // format card number
  const formatCardNumber = (value: string) => {
    return (
      value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ")
        .substr(0, 19) || ""
    );
  };

  return (
    <form
      className="w-full max-w-[400px] flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("cardholder")}
        label="Cardholder name"
        placeholder="e.g. Yunus Turan"
        maxLength={50}
        error={errors.cardholder?.message}
      />
      <Input
        {...register("cardNumber")}
        label="Card number"
        placeholder="e.g. 1234 5678 9123 0000"
        maxLength={19}
        error={errors.cardNumber?.message}
      />

      <div className="flex justify-between items-start gap-3">
        {/* DATE SECTION */}
        <div className="flex flex-col gap-1 basis-1/2 relative">
          <p className="text-very-dark-violet uppercase font-medium text-sm tracking-wider">
            EXP.DATE(MM/YY)
          </p>
          {/* INPUTS IN DATE */}
          <div className="flex gap-1.5 ">
            <Input
              {...register("expDate.month")}
              placeholder="MM"
              maxLength={2}
            />
            <Input
              {...register("expDate.year")}
              placeholder="YY"
              maxLength={2}
            />
          </div>
          {/*ERROR MESSAGE */}

          <p className="text-red-400 text-sm absolute left-1 -bottom-1">
            {errors.expDate?.month?.message || errors.expDate?.year?.message}
          </p>
        </div>
        {/* CVC SECTION */}
        <div className="basis-1/2">
          <Input
            {...register("cvc")}
            label="CVC"
            placeholder="e.g. 123"
            maxLength={3}
            error={errors.cvc?.message}
          />
        </div>
      </div>

      <Button disabled={isSubmitting ? true : false}>Confirm</Button>
    </form>
  );
};

export default CardForm;
