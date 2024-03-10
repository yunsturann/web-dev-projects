import Link from "next/link";
import React from "react";
import LogoutForm from "./LogoutForm";
import { getSession } from "@/actions";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="h-[150px] flex justify-center items-center gap-8 font-medium ">
      <Link
        href="/"
        className="hover:text-white hover:scale-105 transition duration-300"
      >
        Homepage
      </Link>
      <Link
        href="/premium"
        className="hover:text-white hover:scale-105 transition duration-300"
      >
        Premium
      </Link>
      <Link
        href="/profile"
        className="hover:text-white hover:scale-105 transition duration-300"
      >
        Profile
      </Link>
      <Link
        href="/login"
        className="hover:text-white hover:scale-105 transition duration-300"
      >
        Login
      </Link>
      {session.isLoggedIn && <LogoutForm />}
    </nav>
  );
};

export default Navbar;
