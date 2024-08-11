import "./layout.scss";

import Footer from "../footer";
import Navbar from "../navbar";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="layout">
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
