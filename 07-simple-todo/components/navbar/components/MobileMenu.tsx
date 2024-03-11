"use client";
import React, { FC, useState } from "react";
import NavLinks from "./NavLinks";
import { IoClose, IoMenu } from "react-icons/io5";
import { navLinks } from "@/contants/contants";

interface MobileMenuProps {
  isLoggedIn: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex sm:hidden ">
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
        <div className="absolute top-0 h-screen right-0 w-1/2 bg-gray-600 flex items-center justify-center">
          <NavLinks
            links={navLinks}
            isLoggedIn={isLoggedIn}
            classes="flex-col w-full"
          />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
