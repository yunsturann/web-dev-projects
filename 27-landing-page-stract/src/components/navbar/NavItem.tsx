"use client";
// ** React Imports
import React, { FC } from "react";

// ** Next Imports
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItemProps {
  name: string;
  href: string;
  className?: string;
}

const NavItem: FC<NavItemProps> = (props) => {
  const { name, href, className } = props;
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li
      className={cn(
        "text-lg text-var-gray hover:text-var-blue transition duration-300",
        className,
        {
          "text-var-blue nav-item-active": isActive,
        }
      )}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default NavItem;
