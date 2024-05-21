import { Action, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { UserModel } from "../Models/UserModel";
import { EmployeeModel } from "../Models/EmployeeModel";

export function initProducts(
  previousState: ProductModel[],
  action: PayloadAction<ProductModel[]>
) {
  const newState: ProductModel[] = action.payload;
  return newState;
}

export function addProduct(
  previousState: ProductModel[],
  action: PayloadAction<ProductModel>
) {
  const newState: ProductModel[] = [...previousState];
  newState.push(action.payload);
  return newState;
}

export function updateProduct(
  previousState: ProductModel[],
  action: PayloadAction<ProductModel>
) {
  const newState: ProductModel[] = [...previousState];
  const index = newState.findIndex((p) => p.id === action.payload.id);
  if (index >= 0) newState[index] = action.payload;

  return newState;
}

export function deleteProduct(
  previousState: ProductModel[],
  action: PayloadAction<ProductModel>
) {
  const newState: ProductModel[] = [...previousState];
  const index = newState.findIndex((p) => p.id === action.payload.id);
  if (index >= 0) newState.splice(index, 1);

  return newState;
}

export function registerUser(
  previousState: UserModel,
  action: PayloadAction<UserModel>
) {
  const newState: UserModel = action.payload;
  return newState;
}

export function loginUser(
  previousState: UserModel,
  action: PayloadAction<UserModel>
) {
  const newState: UserModel = action.payload;
  return newState;
}

export function logoutUser(previousState: UserModel, action: Action) {
  const newState: UserModel = null;
  return newState;
}

export function initEmployees(
  previousState: EmployeeModel[],
  action: PayloadAction<EmployeeModel[]>
) {
  const newState: EmployeeModel[] = action.payload;
  return newState;
}

export function addEmployee(
  previousState: EmployeeModel[],
  action: PayloadAction<EmployeeModel>
) {
  const newState: EmployeeModel[] = [...previousState].concat(action.payload);

  return newState;
}
