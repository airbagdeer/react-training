import axios from "axios";
import { EmployeeModel } from "../Models/EmployeeModel";

class EmployeeService {
	async getAllEmployees(){
    const response = await axios.get<EmployeeModel[]>('http://localhost:3030/api/employees')
    return response.data;
  }
}

export const employeeService = new EmployeeService();
