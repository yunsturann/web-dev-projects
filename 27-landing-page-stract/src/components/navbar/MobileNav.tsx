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

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden relative shadow-lg">
      {/* Hamburger Icon */}
      <div onClick={() => setIsOpen(true)}>
        <IoMdMenu className="text-var-gray text-3xl sm:text-4xl cursor-pointer hover:text-var-blue transition duration-300" />
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-screen w-full bg-black/30 z-20"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white w-[60%] h-full ml-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon */}
            <div
              className="text-var-black cursor-pointer hover:text-var-blue transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <FaX />
            </div>
            {/* Nav Items */}
            <ul className="flex flex-col gap-4 mt-10">
              {navItems.map((item) => (
                <NavItem key={item.name} {...item} className="text-var-black" />
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
