import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);

  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <h2>My Site</h2>
        <ul className="flex gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/CreateUser">Create User</Link>
          </li>
          <li>
            <Link href="/ClientMember">Client Member</Link>
          </li>
          <li>
            <Link href="/Member">Member</Link>
          </li>
          <li>
            <Link href="/Public">Public</Link>
          </li>
          {session ? (
            <li>
              <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
            </li>
          ) : (
            <li>
              <Link href="/api/auth/signin">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
