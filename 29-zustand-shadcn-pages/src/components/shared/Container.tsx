import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = (props: ContainerProps) => {
  const { className, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        "max-w-7xl w-full mx-auto px-8 md:px-12 py-8 md:py-12 min-h-screen",
        className
      )}
    />
  );
};

export default Container;
