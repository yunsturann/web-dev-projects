import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Container: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("w-full max-w-[1440px] mx-auto px-6 md:px-20", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
