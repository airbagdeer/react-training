import axios from "axios";
import { EmployeeModel } from "../Models/EmployeeModel";
import { appConfig } from "../Utils/AppConfig";

class EmployeeService {
	async getAllEmployees(){
    const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl)
    return response.data;
  }
}

export const employeeService = new EmployeeService();
