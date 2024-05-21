import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import {
  addEmployee,
  addProduct,
  deleteProduct,
  initEmployees,
  initProducts,
  loginUser,
  logoutUser,
  registerUser,
  updateProduct,
} from "./reducers";
import { UserModel } from "../Models/UserModel";
import { logger } from "./middleware";
import { EmployeeModel } from "../Models/EmployeeModel";
import { create } from "domain";

export type AppState = {
  products: ProductModel[];
  user: UserModel;
  employees: EmployeeModel[];
};

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: { initProducts, addProduct, updateProduct, deleteProduct },
});

const userSlice = createSlice({
  name: "user", //internal use
  initialState: null,
  reducers: { registerUser, loginUser, logoutUser },
});

const employeeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: { initEmployees, addEmployee },
});

export const productActions = productSlice.actions;
export const userActions = userSlice.actions;
export const employeeActions = employeeSlice.actions;

export const store = configureStore<AppState>({
  reducer: {
    products: productSlice.reducer,
    user: userSlice.reducer,
    employees: employeeSlice.reducer,
  },
  middleware: (getDefualtMiddlewear) =>
    getDefualtMiddlewear().concat(logger) as any,
});
