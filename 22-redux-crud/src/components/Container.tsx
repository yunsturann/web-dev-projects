// ** React
import { cn } from "@/lib/utils";
import React, { FC } from "react";

// **  PropTypes
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("w-full max-w-7xl mx-auto px-8 md:px-20", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
