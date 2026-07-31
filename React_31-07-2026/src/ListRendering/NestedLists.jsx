import React from "react";

function NestedLists() {
  const departments = [
    {
      id: 1,
      name: "Software Development",
      employees: [
        { id: 101, name: "Vinay", role: "Frontend Developer" },
        { id: 102, name: "Yashwanth", role: "Backend Developer" },
      ],
    },
    {
      id: 2,
      name: "Testing",
      employees: [
        { id: 201, name: "Sowmith", role: "QA Engineer" },
        { id: 202, name: "Keerthy", role: "Automation Tester" },
      ],
    },
    {
      id: 3,
      name: "HR",
      employees: [
        { id: 301, name: "Lokesh", role: "HR Manager" },
        { id: 302, name: "Sandeep", role: "Recruiter" },
      ],
    },
  ];

  return (
    <div className="container">
      <h1>NYB Departments</h1>

      {departments.map((department) => (
        <div className="department-card" key={department.id}>
          <h2>{department.name}</h2>

          <h3>Employees</h3>

          <ul>
            {department.employees.map((employee) => (
              <li key={employee.id}>
                <strong>{employee.name}</strong> - {employee.role}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedLists;