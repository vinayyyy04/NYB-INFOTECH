import { useState } from "react";

function DynamicFormHandling() {

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>

      <h1>Employee Registration</h1>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
      />

      <br /><br />

      <select
        name="department"
        value={employee.department}
        onChange={handleChange}
      >
        <option value="">Select Department</option>
        <option>HR</option>
        <option>IT</option>
        <option>Finance</option>
      </select>

      <h3>{employee.name}</h3>
      <h3>{employee.email}</h3>
      <h3>{employee.department}</h3>

    </div>
  );
}

export default DynamicFormHandling;