// ** React Imports
import { ReactNode } from "react";

// ** Custom Components
import Navbar from "@/components/navbar/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
