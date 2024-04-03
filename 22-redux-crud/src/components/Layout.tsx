import { Indie_Flower } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const indie = Indie_Flower({
  weight: ["400"],
  subsets: ["latin"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={`${indie.className} min-h-screen flex flex-col justify-between bg-white`}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
