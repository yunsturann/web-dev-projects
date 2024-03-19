import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-400 py-4">
      <div className="container bg-slate-200 flex items-center justify-between">
        <h1 className="text-3xl">
          <Link href={"/"}>LOGO</Link>
        </h1>
        <nav className="text-2xl flex gap-4">
          <Link
            href="/client"
            className="hover:text-blue-400 transition duration-300"
          >
            Client
          </Link>
          <Link
            href="/panel"
            className="hover:text-blue-400 transition duration-300"
          >
            Panel
          </Link>
          <Link
            href="/login"
            className="hover:text-blue-400 transition duration-300"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
