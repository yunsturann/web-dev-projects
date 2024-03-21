import { navItems } from "@/constants";
import { useRouter } from "next/router";
import React, { FC, MouseEvent } from "react";

interface MobileMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: FC<MobileMenuProps> = ({ setIsOpen }) => {
  const router = useRouter();

  // HANDLE OVERLAY CLICK
  const handleOverlayClick = (e: MouseEvent<HTMLElement>) => {
    const classes = (e.target as HTMLElement).classList;

    if (classes.contains("mobile_menu_overlay")) {
      setIsOpen(false);
    }
  };

  // HANDLE MENU ITEM CLICK
  const handleMenuItemClick = (url: string) => {
    setIsOpen(false);
    router.push(url);
  };

  return (
    <div
      className="mobile_menu_overlay absolute top-full left-0 bottom-0 right-0 h-screen z-50 bg-gradient-to-b from-dark-blue/50 to-transparent"
      onClick={handleOverlayClick}
    >
      {/* MENU  */}
      <ul className="m-4 py-6 bg-white rounded-lg space-y-2 shadow-md">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="text-center text-dark-blue text-lg p-2 font-medium cursor-pointer hover:bg-gray-100 transition duration-300"
            onClick={() => handleMenuItemClick(item.link)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
