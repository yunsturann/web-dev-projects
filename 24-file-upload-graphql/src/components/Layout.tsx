import React, { ReactNode } from "react";

import { Roboto } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import client from "@/configs/apollo-client";
import Navbar from "./navbar/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <main className={`${roboto.className}`}>
        <Navbar />
        {children}
      </main>
    </ApolloProvider>
  );
};

export default Layout;
