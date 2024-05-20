import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { productService } from "../../../Services/ProductService";
import { ProductModel } from "../../../Models/ProductModel";
import { useEffect, useState } from "react";

export function ProductDetails(): JSX.Element {
  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    productService
      .getOneProduct(id)
      .then((product) => {
        setProduct(product);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const params = useParams();
  const id = params.prodId;

  return (
    <div className="ProductDetails">
      <h3>Name: {product?.name}</h3>
      <h3>Price: {product?.price}</h3>
      <h3>Stock: {product?.stock}</h3>
      <img src={product?.imageUrl}></img>
    </div>
  );
}
