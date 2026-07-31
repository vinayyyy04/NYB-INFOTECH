import React from "react";

function Employee({ name, onShowMessage }) {
  console.log("Employee Rendered");

  return (
    <div>
      <h2>Employee Details</h2>

      <p>Name: {name}</p>

      <button onClick={onShowMessage}>
        Show Message
      </button>
    </div>
  );
}

export default React.memo(Employee);