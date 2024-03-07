import { cn } from "@/lib/utlis";
import React, { FC } from "react";

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputWithLabel: FC<InputWithLabelProps> = ({
  label,
  type = "text",
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 text-marine-blue text-lg">
      <label htmlFor="" className="font-medium">
        {label}
      </label>
      <input
        type={type}
        className={cn(
          "font-semibold border border-light-gray rounded-md p-2.5 pl-4 outline-none focus:ring-1 focus:ring-purplish-blue focus:caret-purplish-blue placeholder-shown:font-medium transition-all ",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default InputWithLabel;
