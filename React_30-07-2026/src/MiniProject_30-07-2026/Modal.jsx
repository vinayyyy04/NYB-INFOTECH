import { useState } from "react";
import { createPortal } from "react-dom";

function Modal({ closeModal }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Employee Registered: ${name}`);
    closeModal();
  };

  const handleFocus = () => {
    console.log("Input Focused");
  };

  const handleBlur = () => {
    console.log("Input Blurred");
  };

  return createPortal(
    <div style={overlay}>
      <div style={modal}>

        <h2 style={{ color: "#0984e3" }}>
          Employee Registration
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={input}
          />

          <div style={{ marginTop: "25px" }}>

            <button
              type="submit"
              style={submitBtn}
            >
              Submit
            </button>

            <button
              type="button"
              style={closeBtn}
              onClick={closeModal}
            >
              Close
            </button>

          </div>

        </form>

      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  background: "white",
  width: "380px",
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,.3)",
};

const input = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const submitBtn = {
  background: "#00b894",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const closeBtn = {
  background: "#d63031",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Modal;