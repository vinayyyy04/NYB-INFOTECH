import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

function Dashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(data);
    });
  }, []);

  return (
    <div>
      <h2>Total Employees: {employees.length}</h2>
    </div>
  );
}

export default Dashboard;