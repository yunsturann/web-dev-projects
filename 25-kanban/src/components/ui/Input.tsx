import { FC } from "react";

interface InputProps {
  name: string;
  type: "text" | "email" | "password" | "number";
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Input: FC<InputProps> = (props) => {
  const { name, type, placeholder, value, disabled, fullWidth } = props;

  return (
    <input
      name={name}
      type={type}
      disabled={disabled}
      value={value}
      required
      placeholder={placeholder}
      className={`h-20 bg-transparent border-b text-3xl  self-center focus:outline-none ${
        disabled && "opacity-50 cursor-not-allowed"
      } ${fullWidth ? "w-full" : "w-4/5"}`}
    />
  );
};

export default Input;
