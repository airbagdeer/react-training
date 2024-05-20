import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";
import { useForm } from "react-hook-form";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/notify";
import { useEffect, useState } from "react";

export function EditProduct(): JSX.Element {
  const params = useParams();
  const id = params.prodId;

  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    productService
      .getOneProduct(Number(id))
      .then((product) => {
        setProduct(product);

        setValue("name", product.name);
        setValue("price", product.price);
        setValue("stock", product.stock);
        setValue("image", product.image);
      })
      .catch((err) => notify.error(err.message));
  });

  const { register, handleSubmit, formState, setValue } =
    useForm<ProductModel>();
  const navigate = useNavigate();

  async function send(changedProduct: ProductModel) {
    try {
      const newProduct = {
        ...product,
        ...changedProduct,
      };
      await productService.editProduct(newProduct);
      notify.success("success");
      navigate("/products");
    } catch (err: any) {
      notify.error(err);
    }
  }

  return (
    <div className="EditProduct">
      <form onSubmit={handleSubmit(send)}>
        <label>Name: </label>
        <input
          type="text"
          {...register("name", ProductModel.nameValidation)}
        ></input>
        <span className="error">{formState.errors?.name?.message}</span>
        <label>Price:</label>
        <input
          type="number"
          {...register("price", ProductModel.priceValidation)}
        ></input>
        <span className="error">{formState.errors?.price?.message}</span>
        <label>Stock:</label>
        <input
          type="number"
          {...register("stock", ProductModel.stockValidation)}
        ></input>
        <span className="error">{formState.errors?.stock?.message}</span>
        <label>Image:</label>
        <input type="file" {...register("image")}></input>
        <span className="error">{formState.errors?.image?.message}</span>
        <button>Update</button>
      </form>
    </div>
  );
}
