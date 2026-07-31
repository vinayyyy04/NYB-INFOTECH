import { useState } from "react";
import Modal from "./Modal";

function MiniProjectApp() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}> Employee Portal</h1>

        <p style={text}>
          Click the button below to register a new employee.
        </p>

        <button
          style={button}
          onClick={() => setShowModal(true)}
        >
          + Add Employee
        </button>
      </div>

      {showModal && (
        <Modal closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
}

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#4facfe,#00f2fe)",
};

const card = {
  background: "white",
  padding: "40px",
  borderRadius: "15px",
  textAlign: "center",
  width: "400px",
  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
};

const title = {
  color: "#2d3436",
};

const text = {
  color: "#555",
  marginBottom: "25px",
};

const button = {
  background: "#0984e3",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "17px",
};

export default MiniProjectApp;