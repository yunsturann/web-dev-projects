import React, { ReactNode, useEffect } from "react";
import { Nunito_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useDispatch } from "react-redux";
import { fetchCountries } from "@/store/countries-store";
import { AppDispatch } from "@/store";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "600", "800", "900"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <ThemeProvider attribute="class">
      <main
        className={`${nunitoSans.className} bg-very-light-gray text-very-dark-blue dark:bg-very-dark-blue-dm dark:text-white flex flex-col justify-between min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
