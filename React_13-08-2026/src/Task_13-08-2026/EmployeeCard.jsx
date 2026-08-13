import React from "react";

const EmployeeCard = React.memo(({ employee, onSelect }) => {
  console.log("Employee Card Rendered:", employee.name);

  return (
    <div className="employee-card">
      <div className="employee-avatar">
        {employee.name.charAt(0)}
      </div>

      <div className="employee-info">
        <h3>{employee.name}</h3>

        <p className="role">{employee.role}</p>

        <p>
          <strong>Department:</strong> {employee.department}
        </p>

        <p>
          <strong>Location:</strong> {employee.location}
        </p>

        <button onClick={() => onSelect(employee)}>
          View Profile
        </button>
      </div>
    </div>
  );
});

export default EmployeeCard;