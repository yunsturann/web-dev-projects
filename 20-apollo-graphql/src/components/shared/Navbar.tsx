import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-white text-xl bg-gray-700 flex items-center gap-x-12 py-4 px-6">
      <h1>
        <Link href="/">GraphQL</Link>
      </h1>
      <nav className="space-x-4 text-lg">
        <Link href="/">Home</Link>
        <Link href="/create">Create</Link>
      </nav>
    </div>
  );
};

export default Navbar;
