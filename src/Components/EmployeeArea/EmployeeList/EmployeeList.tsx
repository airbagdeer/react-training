import { useEffect, useState } from "react";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { employeeService } from "../../../Services/EmployeeService";
import "./EmployeeList.css";

export function EmployeeList(): JSX.Element {
  const [employees, setEmployees] = useState<EmployeeModel[]>();

  useEffect(() => {
    employeeService
      .getAllEmployees()
      .then((employees) => {
        setEmployees(employees);
      })
      .catch((err) => console.log(err.message));
  });

  return (
    <div className="EmployeeList">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Title</th>
              <th>Country</th>
              <th>City</th>
              <th>Birth Date</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((employee) => {
              return (
                <>
                  <tr>
                    <td>{employee?.id}</td>
                    <td>{employee?.firstName}</td>
                    <td>{employee?.lastName}</td>
                    <td>{employee?.title}</td>
                    <td>{employee?.country}</td>
                    <td>{employee?.city}</td>
                    <td>{employee?.birthDate}</td>
                    <td>
                      <img
                        src={employee?.imageUrl}
                        alt="Employee Image"
                        className="employee-image"
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
