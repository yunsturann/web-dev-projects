import { getSession } from "@/actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const PremiumPage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  if (!session.isPro) {
    return (
      <div className="w-1/2 mx-auto">
        <h1>Only premium users can see the content</h1>
        <Link href={"/profile"} className="underline">
          Go to Profile page to upgrade to premium
        </Link>
        {/* DUMMY CONTENT */}
        <p className="mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }

  return <div>PremiumPage</div>;
};

export default PremiumPage;
