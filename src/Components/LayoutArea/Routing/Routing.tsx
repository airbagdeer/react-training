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
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<ProductList></ProductList>}></Route>
        <Route path="/products/new" element={<AddProduct />}></Route>
        <Route
          path="/products/details/:prodId"
          element={<ProductDetails />}
        ></Route>
        <Route
          path="/products/edit/:prodId"
          element={<EditProduct />}
        ></Route>
        <Route path="/about" element={suspenseAbout}></Route>
        <Route
          path="/employees"
          element={<EmployeeList></EmployeeList>}
        ></Route>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}
