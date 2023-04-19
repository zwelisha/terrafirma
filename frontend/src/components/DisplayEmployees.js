import React, { Fragment, useEffect, useState } from "react";
import EditEmployee from "./EditEmployee";

const DisplayEmployees = () => {
  const [employees, setEmployees] = useState([]);

  // Delete an employee
  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/employees/${id}`,
        { method: "DELETE" }
      );
      console.log(response.status);
      window.location = "/";
      //Only show employees that have not been deleted
      setEmployees(employees.filter((employee) => employees.employee_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  const getEmployees = async () => {
    try {
      const response = await fetch("http://localhost:5000/employees");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getEmployees();
  }, []); // Adding [], ensures useEffect only makes one request, otherwise it keeps going
  return (
    <Fragment>
      {" "}
      <div className="container">
        <table className="table table-responsive table-striped">
          <thead>
            <tr>
              <th>NAME</th>
              <th>SURNAME</th>
              <th>AGE</th>
              <th>DEPARTMENT</th>
              <th>ADDRESS</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employee_id}>
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
                <td>{employee.age}</td>
                <td>{employee.department}</td>
                <td>{employee.address}</td>
                <td>
                  <EditEmployee employee={employee} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(employee.employee_id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default DisplayEmployees;
