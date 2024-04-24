"use client";
// ** Next.js
import Link from "next/link";

// ** Clerk
import { UserButton, useSession } from "@clerk/nextjs";

// ** Icons
import { PiKanban } from "react-icons/pi";
import ThemeSwitcher from "./ThemeSwitcher";

// ** Hooks
import useRouteCheck from "@/hooks/useRouteCheck";

const Navbar = () => {
  const { isSignedIn } = useSession();

  const onboardingRoute = useRouteCheck(["onboarding"]);
  const authRoutes = useRouteCheck(["sign-in", "sign-up"]);
  const kanbanRoute = useRouteCheck(["mykanban"]);

  return (
    <div
      className={`w-full py-5 bg-transparent relative z-10 
      ${!kanbanRoute || onboardingRoute ? "text-white" : null}
      ${authRoutes && "text-gray-900 dark:text-white"}
    `}
    >
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
          {!kanbanRoute && isSignedIn && !onboardingRoute && (
            <Link href={"/mykanban"} className="tracking-tight hover:underline">
              Go to my board &#8594;
            </Link>
          )}

          {kanbanRoute || authRoutes ? <ThemeSwitcher /> : null}
        </div>
        {!isSignedIn && !authRoutes && (
          <Link href="/sign-in" className="tracking-tight hover:underline">
            Already a member? Sign In &#8594;
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
