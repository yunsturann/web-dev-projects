import { cn } from "@/lib/utils";
import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, id, className, ...rest } = props;

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        ref={ref}
        className={cn(
          "outline-none border border-black rounded-md py-1 px-3",
          className
        )}
        {...rest}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
