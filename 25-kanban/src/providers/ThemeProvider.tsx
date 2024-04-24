"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Theme = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
