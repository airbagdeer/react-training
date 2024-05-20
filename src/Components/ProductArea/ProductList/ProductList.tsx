import { useEffect, useState } from "react";
import { productService } from "../../../Services/ProductService";
import "./ProductList.css";
import { ProductModel } from "../../../Models/ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";

export function ProductList(): JSX.Element {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    productService
      .getAllProducts()
      .then((dbProducts) => {
        setProducts(dbProducts);
      })
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className="ProductList">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
