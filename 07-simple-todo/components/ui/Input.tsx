import React, { FC } from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder: string;
  required?: boolean;
}

const Input: FC<InputProps> = ({
  type = "text",
  name,
  placeholder,
  required,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2 outline-none border-none rounded-lg bg-gray-200 focus:bg-white transition-all duration-300 ease-in-out  focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    />
  );
};

export default Input;
