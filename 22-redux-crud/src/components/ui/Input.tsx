import { cn } from "@/lib/utils";
import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { error, label, id, className, required, ...rest } = props;

  return (
    <div className="w-full flex-1 flex flex-col">
      {label && (
        <label htmlFor={id || label}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id || label}
        ref={ref}
        className={cn(
          "outline-none border border-black rounded-md py-1 px-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-400",
          className
        )}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
