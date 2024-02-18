import React from "react";

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder: string;
  required?: boolean;
}

const Input = ({ type = "text", name, placeholder, required }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="px-4 py-2 outline-none border-none rounded-lg bg-gray-200 focus:bg-white transition-all duration-300 ease-in-out  focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    />
  );
};

export default Input;
