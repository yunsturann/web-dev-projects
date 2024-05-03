"use client";
// ** React Imports
import React, { useState } from "react";

// ** Icons
import { IoMdMenu } from "react-icons/io";
import { FaX } from "react-icons/fa6";

// ** Constants
import { navItems } from "@/constants";

// ** Custom Components
import NavItem from "./NavItem";

// ** Utils
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden relative shadow-lg">
      {/* Hamburger Icon */}
      <div onClick={() => setIsOpen(true)}>
        <IoMdMenu className="text-var-gray text-3xl sm:text-4xl cursor-pointer hover:text-var-blue transition duration-300" />
      </div>
      {isOpen && (
        // BG Overlay
        <div
          className="fixed inset-0 min-h-screen bg-black/30 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 bg-white w-[60%] h-screen p-6 transform translate-x-full transition-transform ease-in-out duration-500 z-50",
          {
            "translate-x-0": isOpen,
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <span
          className="p-2 inline-block text-var-black cursor-pointer hover:text-var-blue transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          <FaX />
        </span>
        {/* Nav Items */}
        <ul className="flex flex-col gap-4 mt-10">
          {navItems.map((item) => (
            <NavItem key={item.name} {...item} className="text-var-black" />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
