import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { productService } from "../../../Services/ProductService";
import { ProductModel } from "../../../Models/ProductModel";
import { useEffect, useState } from "react";
import { notify } from "../../../Utils/notify";
import { NavLink } from "react-router-dom";

export function ProductDetails(): JSX.Element {
  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    productService
      .getOneProduct(Number(id))
      .then((product) => {
        setProduct(product);
      })
      .catch((err) => notify.error(err));
  }, []);

  function deleteProduct() {
    alert("Deleting this product...");
    productService.deleteProduct(product)
  }

  const params = useParams();
  const id = params.prodId;

  return (
    <div className="ProductDetails">
      <h3>Name: {product?.name}</h3>
      <h3>Price: {product?.price}</h3>
      <h3>Stock: {product?.stock}</h3>
      <img src={product?.imageUrl}></img>

      <br></br>
      <NavLink to="/products"> Back </NavLink>
      <span>|</span>
      <NavLink to={"/products/edit/" + product?.id}> Edit </NavLink>
      <span>|</span>
      <NavLink to="products" onClick={deleteProduct}>
         Delete
      </NavLink>
    </div>
  );
}
