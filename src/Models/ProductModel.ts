import { RegisterOptions } from "react-hook-form";

export class ProductModel {
	public id: number;
  public name: string;
  public price: number;
  public stock: number;
  public imageUrl: string;
  public image: File;

  public static nameValidation: RegisterOptions = {
    required: { value: true, message: "Missing name." },
    minLength: { value: 2, message: "Name too short." },
    maxLength: { value: 100, message: "Name too long." },
  };

  public static priceValidation: RegisterOptions = {
    required: { value: true, message: "Missing price." },
    min: { value: 0, message: "Price cant be negative." },
    max: { value: 100, message: "Maximum Price is 100" },
  }

  public static stockValidation: RegisterOptions = {
    required: { value: true, message: "Missing stock." },
    min: { value: 0, message: "Stock cant be negative." },
    max: { value: 100, message: "Maximum Stock is 100" },
  }

  public static imageValidation: RegisterOptions = {
    required: {value: true, message: "Each products needs a picture."}
  }
}
