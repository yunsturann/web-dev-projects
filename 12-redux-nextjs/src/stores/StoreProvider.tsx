"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/stores";
import { createStore } from "./indexForHydration";

const StoreProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // for hydration version
  // const store = createStore();
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
