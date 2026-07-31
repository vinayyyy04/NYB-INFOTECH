import { createPortal } from "react-dom";

function Modal({ closeModal }) {
  return createPortal(
    <div style={overlay}>
      <div style={box}>
        <h2>Modal</h2>
        <p>Welcome to React Portal</p>

        <button onClick={closeModal}>
          Close
        </button>
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
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const box = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
};

export default Modal;