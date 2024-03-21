import { cn } from "@/lib/utils";
import React, { HTMLAttributes, forwardRef } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "px-4 py-2 text-white bg-lime-green rounded-md transition duration-300",
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
