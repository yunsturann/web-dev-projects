import React, { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "./Navbar/Navbar";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "600", "800", "900"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <main
        className={`${nunitoSans.className} bg-very-light-gray text-very-dark-blue dark:bg-dark-blue-dm dark:text-white flex flex-col justify-between min-h-screen`}
      >
        <Navbar />
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
