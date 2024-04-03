import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success";
}

const variants = {
  primary: "bg-blue-500 border-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-white border-black text-black hover:bg-gray-100",
  danger: "bg-red-500 border-red-500 text-white hover:bg-red-600",
  success: "bg-green-500 border-green-500 text-white hover:bg-green-600",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, variant, ...rest } = props;

  const myVariant = variant ? variants[variant] : variants.primary;

  return (
    <button
      ref={ref}
      {...rest}
      className={cn(
        "w-full border border-black rounded-md px-3 py-1 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md",
        myVariant,
        className
      )}
    />
  );
});

Button.displayName = "Button";

export default Button;
