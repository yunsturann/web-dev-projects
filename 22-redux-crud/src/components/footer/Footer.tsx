import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-white bg-gray-700 text-center py-2 shadow-md">
      <p>
        A project to learn redux better!{" "}
        <Link href="https://yunsturann.vercel.app/">
          <em className="underline underline-offset-2 hover:text-blue-400 transition">
            @Yunus Turan
          </em>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
