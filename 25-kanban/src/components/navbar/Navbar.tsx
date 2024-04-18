"use client";
// ** Next.js
import Link from "next/link";

// ** Clerk
import { UserButton, useSession } from "@clerk/nextjs";

// ** Icons
import { PiKanban } from "react-icons/pi";

const Navbar = () => {
  const { isSignedIn } = useSession();

  return (
    <div className="w-full py-5 bg-transparent relative z-10 ">
      <div className="flex justify-between w-[90%] max-w-[1450px] mx-auto">
        <Link
          href="/"
          className="flex items-center gap-1 text-2xl font-bold uppercase"
        >
          <h1>My Kanban</h1>
          <PiKanban />
        </Link>

        <div className="flex items-center gap-5">
          <UserButton afterSignOutUrl="/" />
          <span>THEME SWITCHER</span>
        </div>
        {!isSignedIn && (
          <Link href="/sign-in" className="tracking-tight hover:underline">
            Already a member? Sign In &#8594;
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
