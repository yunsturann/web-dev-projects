import React, { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={`${inter.className} min-h-screen flex flex-col justify-between max-w-7xl w-full mx-auto px-8 md:px-20 `}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
