import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("w-[94%] max-w-[1320px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
