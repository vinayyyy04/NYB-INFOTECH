import React from "react";

function PassingParamters() {
  const viewEmployee = (id, name) => {
    alert(`Employee ID: ${id}\nEmployee Name: ${name}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Employee List</h2>

      <button onClick={() => viewEmployee(101, "Vinay")}>
        View Vinay
      </button>

      <br /><br />

      <button onClick={() => viewEmployee(102, "Yashwanth")}>
        View Yashwanth
      </button>
    </div>
  );
}

export default PassingParamters;