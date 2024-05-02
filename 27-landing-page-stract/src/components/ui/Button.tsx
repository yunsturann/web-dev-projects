import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "blue" | "black";
}

const variants = {
  blue: "bg-var-blue text-white hover:bg-blue-700 active:bg-blue-800 ",
  black: "bg-var-black text-white hover:bg-black-700 active:bg-black-800",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant = "blue", className, ...rest } = props;

  return (
    <button
      ref={ref}
      {...rest}
      className={cn(
        "px-10 py-[15px] rounded-full font-medium shadow-md transition duration-300",
        variants[variant],
        className
      )}
    />
  );
});

Button.displayName = "Button";

export default Button;
