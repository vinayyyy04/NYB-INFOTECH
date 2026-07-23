import { useEffect, useState } from "react";

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {employees.map((employee) => (
        <div
          key={employee.id}
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "15px",
            width: "250px",
            boxShadow: "2px 2px 5px lightgray",
          }}
        >
          <h2>{employee.name}</h2>
          <p><b>Email:</b> {employee.email}</p>
          <p><b>Phone:</b> {employee.phone}</p>
          <p><b>Department:</b> {employee.company.name}</p>
          <p><b>City:</b> {employee.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default Employees;