"use client";
import { logout } from "@/lib/authActions";
import { NavLink } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FormEvent } from "react";

interface NavLinksProps {
  links: NavLink[];
  classes?: string;
  isLoggedIn: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, classes, isLoggedIn }) => {
  const pathname = usePathname();

  const handleLogout = async (e: FormEvent) => {
    e.preventDefault();
    if (!confirm("Are you sure?")) return;
    await logout();
  };

  return (
    <nav className="max-sm:w-full">
      <ul
        className={`flex items-center gap-4 uppercase tracking-wide ${classes}`}
      >
        {links.map((link) => {
          if (link.name === "profile" && !isLoggedIn) return null;
          return (
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
          );
        })}
        {/* LOGIN / LOGOUT */}
        {isLoggedIn ? (
          <form className="w-full flex justify-center" onSubmit={handleLogout}>
            <button
              type="submit"
              className={`uppercase max-sm:w-2/3 text-center py-2 px-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-400 hover:text-white`}
            >
              Logout
            </button>
          </form>
        ) : (
          <li className="w-full flex justify-center">
            <Link
              href={"/login"}
              className={`max-sm:w-2/3 text-center py-2 px-3 rounded-lg font-semibold hover:text-blue-400 transition duration-300 ${
                pathname === "/login" && "bg-white text-blue-400"
              }`}
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavLinks;
