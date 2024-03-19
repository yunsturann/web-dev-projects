import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 pb-5 relative">
        {label && (
          <label
            htmlFor=""
            className="text-very-dark-violet uppercase font-medium text-sm tracking-wider"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            "p-px rounded-lg focus-within:bg-gradient-to-r focus-within:from-gradient-1 focus-within:to-gradient-2",
            {
              "bg-red-400": error,
            }
          )}
        >
          <input
            ref={ref}
            className={cn(
              "size-full border border-light-grayish-violet p-2 pl-3 outline-none rounded-lg focus:border-white",
              className
            )}
            {...props}
          />
        </div>
        <p className="absolute -bottom-1 left-1 text-red-400 text-sm">
          {error}
        </p>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
