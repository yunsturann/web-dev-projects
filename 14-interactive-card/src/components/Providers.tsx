"use client";

import HookFormContext from "@/context/HookFormContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <HookFormContext>{children}</HookFormContext>;
};

export default Providers;
