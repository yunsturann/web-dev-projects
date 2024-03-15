"use client";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="size-full flex flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          {/* If user signed in show it  */}
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {/* First Slice */}
              {navLinks.slice(0, 6).map((link) => {
                const isActive = pathname === link.route;

                return (
                  <li
                    key={link.label}
                    className={cn("sidebar-nav_element group text-gray-700", {
                      "bg-purple-gradient text-white": isActive,
                    })}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Second Slice and USER BUTTON */}
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = pathname === link.route;

                return (
                  <li
                    key={link.label}
                    className={cn("sidebar-nav_element group text-gray-700", {
                      "bg-purple-gradient text-white": isActive,
                    })}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          {/* SignOut */}
          <SignedOut>
            {/* Button will be rendered as a Link because of asChild property */}
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
