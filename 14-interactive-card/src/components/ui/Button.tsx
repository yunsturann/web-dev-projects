import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "w-full bg-very-dark-violet text-white p-3 font-medium rounded-lg hover:opacity-90 transition duration-300",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
