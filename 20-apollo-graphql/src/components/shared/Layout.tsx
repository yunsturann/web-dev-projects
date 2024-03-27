import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { ApolloProvider } from "@apollo/client";
import client from "@/configs/apollo-client";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar />
        {children}
      </div>
    </ApolloProvider>
  );
};

export default Layout;
