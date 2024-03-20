"use client";
import fetcher from "@/services/fetcher";
import React, { ReactNode } from "react";
import { SWRConfig } from "swr";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher,

        // refreshInterval: 3000
        // revalidateIfStale: false, // don't revalidate if the data is stale
        // revalidateOnFocus: false, // don't revalidate on focus (e.g. when the page is loaded)
        // revalidateOnReconnect: false, // don't revalidate on reconnect (e.g. when the user comes online)
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default Providers;
