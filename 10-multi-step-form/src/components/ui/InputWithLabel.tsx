import { cn } from "@/lib/utlis";
import React, { FC, forwardRef } from "react";

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, type = "text", className, error, ...props }, ref) => {
    return (
      <div
        className="flex flex-col gap-1 text-marine-blue text-base sm:text-lg relative"
        ref={ref}
      >
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
        <p className="absolute right-0 top-1.5  text-rose-500 text-sm sm:text-base font-medium">
          {error}
        </p>
      </div>
    );
  }
);

InputWithLabel.displayName = "InputWithLabel";

export default InputWithLabel;
