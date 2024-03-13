"use client";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { createStore } from "./indexForHydration";

interface StoreProviderProps {
  children: Readonly<React.ReactNode>;
  preloadedState: any;
}

const StoreProvider: FC<StoreProviderProps> = ({
  children,
  preloadedState,
}) => {
  const store = createStore(preloadedState);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
