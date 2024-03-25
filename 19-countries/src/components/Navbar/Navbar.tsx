import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Container from "../Container";

const Navbar = () => {
  return (
    <nav className="sticky shadow-md bg-white dark:bg-dark-blue-dm">
      <Container className="flex justify-between items-center h-20">
        {/* LOGO */}
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        {/* THEME SWITCHER */}
        <ThemeSwitcher />
      </Container>
    </nav>
  );
};

export default Navbar;
