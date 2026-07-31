import { useState } from "react";

function Onclick() {
  const [status, setStatus] = useState("Not Checked In");

  const checkIn = () => {
    setStatus("Checked In Successfully");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Employee Attendance</h2>

      <h3>Status: {status}</h3>

      <button onClick={checkIn}>
        Check In
      </button>
    </div>
  );
}

export default Onclick;