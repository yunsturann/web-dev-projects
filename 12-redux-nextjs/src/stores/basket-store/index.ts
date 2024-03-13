import { ProductType } from "@/types/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BasketState {
  basket: ProductType[];
}

const initialState: BasketState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<ProductType>) => {
      state.basket = [...state.basket, action.payload];
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
