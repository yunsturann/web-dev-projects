import { Caveat } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={`${caveat.className} min-h-screen flex flex-col justify-between bg-white`}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
