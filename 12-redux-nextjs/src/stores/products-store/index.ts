import { ProductType } from "@/types/product";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProductState {
  products: ProductType[];
  product: ProductType;
}

const initialState: ProductState = {
  products: [],
  product: {} as ProductType,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<ProductType[]>) => {
        state.products = action.payload;
      }
    );
    // builder to fetch ONE Product
    builder.addCase(
      fetchProduct.fulfilled,
      (state, action: PayloadAction<ProductType>) => {
        state.product = action.payload;
      }
    );
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return products;
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id: number) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    console.log(product);

    return product;
  }
);

// export { } = productsSlice.actions;
export default productsSlice.reducer;
