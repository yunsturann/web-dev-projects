"use client";
import { NavLink } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinksProps {
  links: NavLink[];
  classes?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, classes }) => {
  const pathname = usePathname();

  return (
    <nav className="max-sm:w-full">
      <ul
        className={`flex items-center gap-4 uppercase tracking-wide ${classes}`}
      >
        {links.map((link) => (
          <li key={link.id} className="w-full flex justify-center">
            <Link
              href={link.path}
              className={`max-sm:w-2/3 text-center py-2 px-3 rounded-lg font-semibold hover:text-blue-400 transition duration-300 ${
                pathname === link.path && "bg-white text-blue-400"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
