import { useNavigate } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import "./NewEmployee.css";
import { useForm } from "react-hook-form";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/notify";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { employeeService } from "../../../Services/EmployeeService";

export function NewEmployee(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<EmployeeModel>();
  const navigate = useNavigate();

  async function send(employee: EmployeeModel) {
    try {
      employee.image = (employee.image as unknown as FileList)[0];
      await employeeService.addEmployee(employee);
      notify.success("success");
      navigate("/employees");
    } catch (err: any) {
      notify.error(err);
    }
  }

  return (
    <div className="NewEmployee">
      <form onSubmit={handleSubmit(send)}>
        <label>First Name: </label>
        <input type="text" {...register("firstName")}></input>
        <span className="error">{formState.errors?.firstName?.message}</span>

        <label>Last Name: </label>
        <input type="text" {...register("lastName")}></input>
        <span className="error">{formState.errors?.lastName?.message}</span>

        <label>Title: </label>
        <input type="text" {...register("title")}></input>
        <span className="error">{formState.errors?.title?.message}</span>

        <label>Country: </label>
        <input type="text" {...register("country")}></input>
        <span className="error">{formState.errors?.country?.message}</span>

        <label>City: </label>
        <input type="text" {...register("city")}></input>
        <span className="error">{formState.errors?.city?.message}</span>

        <label>Birth Date: </label>
        <input type="text" {...register("birthDate")}></input>
        <span className="error">{formState.errors?.birthDate?.message}</span>

        <input type="file" {...register("image")}></input>
        <span className="error">{formState.errors?.image?.message}</span>

        <button>Add</button>
      </form>
    </div>
  );
}
