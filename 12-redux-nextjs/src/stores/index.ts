import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user-store";
import productsReducer from "./products-store";
import basketReducer from "./basket-store";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
