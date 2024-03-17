import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor=""
            className="text-very-dark-violet uppercase font-medium text-sm tracking-wider"
          >
            {label}
          </label>
        )}
        <div className=" p-px rounded-lg focus-within:bg-gradient-to-r focus-within:from-gradient-1 focus-within:to-gradient-2 ">
          <input
            ref={ref}
            className={cn(
              "size-full border border-light-grayish-violet p-2 pl-3 outline-none rounded-lg focus:border-white",
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
