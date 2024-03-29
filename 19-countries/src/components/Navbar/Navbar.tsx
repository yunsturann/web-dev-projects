import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Container from "../Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky shadow-md bg-white dark:bg-dark-blue-dm">
      <Container className="flex justify-between items-center h-20">
        {/* LOGO */}
        <h1 className="text-2xl font-bold">
          <Link href={"/"}>Where in the world?</Link>
        </h1>
        {/* THEME SWITCHER */}
        <ThemeSwitcher />
      </Container>
    </nav>
  );
};

export default Navbar;
