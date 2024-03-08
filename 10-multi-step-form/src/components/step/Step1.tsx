import React, { useContext, useEffect } from "react";
import InputWithLabel from "../ui/InputWithLabel";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { TPersonalInfoSchema, personalInfoSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContext, FormContextType } from "@/contexts/FormContext";

const Step1 = () => {
  const { setStep, personalInfo, setPersonalInfo } =
    useContext<FormContextType>(FormContext);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TPersonalInfoSchema>({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = (data: TPersonalInfoSchema) => {
    setPersonalInfo(data);
    setStep((prev) => prev + 1);
  };

  // when the component mounts, set the form values to the personalInfo state
  useEffect(() => {
    setValue("name", personalInfo.name);
    setValue("email", personalInfo.email);
    setValue("phone", personalInfo.phone);
  }, [personalInfo.name, personalInfo.email, personalInfo.phone, setValue]);

  return (
    <div className="h-full">
      <form
        className="h-full flex flex-col justify-between "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2 sm:space-y-4 lg:space-y-6">
          <InputWithLabel
            {...register("name")}
            label="Name"
            placeholder="e.g. Yunus Turan"
            error={errors.name?.message}
          />
          <InputWithLabel
            {...register("email")}
            label="Email Address"
            placeholder="e.g. ynstrn@gmail.com"
            error={errors.email?.message}
          />
          <InputWithLabel
            {...register("phone")}
            label="Phone Number"
            placeholder="e.g. 555 444 33 22"
            maxLength={10}
            error={errors.phone?.message}
          />
        </div>
        <Button
          size={"lg"}
          className="ml-auto bg-marine-blue hover:bg-purplish-blue mt-4"
        >
          Next Step
        </Button>
      </form>
    </div>
  );
};

export default Step1;
