import React from "react";
import { IconType } from "react-icons";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement<IconType>;
  label: string;
  //   onClick?: () => void;
  //   a: React.FC<IconType>;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  label,
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      className={` hover:bg-opacity-80 flex items-center gap-3 px-6 py-4 rounded-full transition ${props.className}`}
    >
      {label}
      {/* {props.children} */}
      {Icon}
    </button>
  );
};

export default Button;
