import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import {
  addProduct,
  deleteProduct,
  initProducts,
  updateProduct,
} from "./reducers";

export type AppState = {
  products: ProductModel[];
};

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: { initProducts, addProduct, updateProduct, deleteProduct },
});

export const productActions = productSlice.actions;

export const store = configureStore<AppState>({
  reducer: {
    products: productSlice.reducer,
  },
});
