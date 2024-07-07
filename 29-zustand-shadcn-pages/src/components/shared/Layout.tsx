import React, { useEffect } from "react";
import { Toaster } from "../ui/toaster";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useUserStore } from "@/store/use-user-store";
import Sidebar from "./sidebar";
import { publicPages } from "@/constants";
import { useRouter } from "next/router";
import Providers from "./Providers";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { currentUser, fetchUserInfo, isLoading } = useUserStore(
    (state) => state
  );

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid || "");
    });

    return () => unSub();
  }, [fetchUserInfo]);

  if (isLoading)
    return <div className="text-yellow-400 text-4xl">Loading...</div>;

  if (!auth.currentUser && !publicPages.includes(router.pathname)) {
    router.push("/auth");
  }

  return (
    <Providers>
      <main className="min-h-screen w-full flex flex-col lg:flex-row relative">
        {/* Sidebar */}
        <Sidebar />
        {/* Mobile Navbar */}
        <div className="flex-1 lg:max-h-screen overflow-auto">{children}</div>
        <Toaster />
      </main>
    </Providers>
  );
};

export default Layout;
