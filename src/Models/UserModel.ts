import { RegisterOptions } from "react-hook-form";

export class UserModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public role: string;

  public static firstNameValidation: RegisterOptions = {
    required: { value: true, message: "You must provide a first name" },
    minLength: { value: 2, message: "Minimum 2 charachters" },
    maxLength: { value: 20, message: "Maximum 20 charachters" },
  };

  public static lastNameValidation: RegisterOptions = {
    required: { value: true, message: "You must provide a last name" },
    minLength: { value: 2, message: "Minimum 2 charachters" },
    maxLength: { value: 20, message: "Maximum 20 charachters" },
  };

  public static passwordValidation: RegisterOptions = {
    required: { value: true, message: "You must provide a password" },
    minLength: { value: 4, message: "Minimum 4 charachters" },
    maxLength: { value: 20, message: "Maximum 20 charachters" },
  };

  public static emailValidation: RegisterOptions = {
    required: { value: true, message: "You must provide an email" },
    minLength: { value: 4, message: "Minimum 4 charachters" },
    maxLength: { value: 100, message: "Maximum 100 charachters" },
  };
}
