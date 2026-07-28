import { useEffect, useState } from "react";
import { getEmployees } from "./employeeService";

function Employee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(data);
    });
  }, []);

  return (
    <div>
      <h1>Employee List--Service Files</h1>

      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Employee;