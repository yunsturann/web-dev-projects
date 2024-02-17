"use client";
import NavLinks from "./components/NavLinks";
import { navLinks } from "@/contants/contants";
import Link from "next/link";
import { useRef, useState } from "react";
//icons
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  // const ref = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-600 text-white p-4 sm:p-6 flex justify-between items-center relative">
      {/*Logo */}
      <Link href="/" title="homepage">
        <h1 className=" text-3xl sm:text-4xl bg-gradient-to-br bg-clip-text text-transparent from-blue-500 to-green-300 font-bold uppercase">
          Todo
        </h1>
      </Link>

      {/*Desktop Nav */}
      <div className="hidden sm:flex">
        <NavLinks links={navLinks} />
      </div>

      {/*Mobile Nav */}
      <div className="flex sm:hidden ">
        {/* <input
          type="text"
          ref={ref}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 100)}
          className="w-0 h-0 opacity-0 overflow-hidden"
        /> */}
        <button
          className="z-50"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
        {/*Mobile Links */}
        {isOpen && (
          <div
            className="absolute top-0 h-screen right-0 w-1/2 bg-gray-600 flex items-center justify-center"
            // style={{ height: "calc(100vh - 5rem)" }}
          >
            <NavLinks links={navLinks} classes="flex-col w-full" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
