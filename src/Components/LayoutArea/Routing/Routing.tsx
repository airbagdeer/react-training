import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { About } from "../../AboutArea/About/About";
import { Home } from "../../HomeArea/Home/Home";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Suspense, lazy } from "react";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { EmployeeList } from "../../EmployeeArea/EmployeeList/EmployeeList";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import { Register } from "../../UserArea/Register/Register";
import { Login } from "../../UserArea/Login/Login";
import { NewEmployee } from "../../EmployeeArea/NewEmployee/NewEmployee";
import { ConteactUs } from "../../AboutArea/ConteactUs/ConteactUs";

export function Routing(): JSX.Element {
  const LazyAbout = lazy(() => import("../../AboutArea/About/About"));

  const suspenseAbout = (
    <Suspense fallback="">
      <LazyAbout></LazyAbout>
    </Suspense>
  );

  return (
    <div className="Routing">
      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/new" element={<AddProduct />} />
        <Route path="/products/details/:prodId" element={<ProductDetails />} />
        <Route path="/products/edit/:prodId" element={<EditProduct />} />
        <Route path="/about" element={suspenseAbout} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/new" element={<NewEmployee />} />
        <Route path="/contactus" element={<ConteactUs />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
