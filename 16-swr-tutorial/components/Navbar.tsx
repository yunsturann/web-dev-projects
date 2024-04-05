import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-700 flex items-center justify-center text-white text-lg gap-x-8">
      <Link href="/" className="px-3 py-1">
        Home
      </Link>
      <Link href="/pagination" className="px-3 py-1">
        Products
      </Link>
      <Link href="/infinite-scroll" className="px-3 py-1">
        Infinite Scroll
      </Link>
    </div>
  );
};

export default Navbar;
