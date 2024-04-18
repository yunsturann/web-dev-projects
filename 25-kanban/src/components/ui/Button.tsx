import React, { FC } from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  confirmButton?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { text, type, onClick, disabled, confirmButton } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex h-10 rounded-md text-gray-700 px-8 text-sm font-medium shadow transition-colors duration-300 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 items-center ${
        disabled && "opacity-50"
      }
      ${
        confirmButton ? "bg-red-500 text-white hover:bg-red-500/80" : "bg-white"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
