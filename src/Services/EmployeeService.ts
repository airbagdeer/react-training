import axios, { AxiosRequestConfig } from "axios";
import { EmployeeModel } from "../Models/EmployeeModel";
import { appConfig } from "../Utils/AppConfig";
import { employeeActions, productActions, store } from "../Redux/store";

class EmployeeService {
  async getAllEmployees() {
    const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
    const employees: EmployeeModel[] = response.data;

    const action = employeeActions.initEmployees(employees);
    store.dispatch(action);

    return employees;
  }

  async addEmployee(employee: EmployeeModel) {
    const options: AxiosRequestConfig = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const response = await axios.post<EmployeeModel>(
      appConfig.employeesUrl,
      employee,
      options
    );

    const dbEmployee: EmployeeModel = response.data;

    const action = employeeActions.addEmployee(dbEmployee);
    store.dispatch(action);

    return response.data;
  }
}

export const employeeService = new EmployeeService();
