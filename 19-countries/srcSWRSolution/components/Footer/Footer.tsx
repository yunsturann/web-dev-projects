import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <p className="text-center py-4 text-sm bg-white dark:bg-dark-blue-dm">
        created by{" "}
        <Link
          href="https://yunsturann.vercel.app"
          className="text-very-dark-blue dark:text-white font-bold"
        >
          yunusturan
        </Link>{" "}
        - devChallenges.io
      </p>
    </footer>
  );
};

export default Footer;
