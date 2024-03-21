import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-between ${publicSans.className}`}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
