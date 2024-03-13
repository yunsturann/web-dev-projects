import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user-store";
import productsReducer from "./products-store";
import basketReducer from "./basket-store";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      user: userReducer,
      products: productsReducer,
      basket: basketReducer,
    },
    preloadedState,
  });
  return store;
}

export const storeHydration = createStore({});

export type RootState = ReturnType<typeof storeHydration.getState>;
export type AppDispatch = typeof storeHydration.dispatch;
