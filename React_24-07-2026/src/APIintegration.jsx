import { useEffect, useState } from "react";

function APIintegration() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div>
      <h1>Employee Directory</h1>

      {employees.map(emp => (
        <div key={emp.id}>
          <h3>{emp.name}</h3>
          <p>{emp.email}</p>
        </div>
      ))}
    </div>
  );
}

export default APIintegration;