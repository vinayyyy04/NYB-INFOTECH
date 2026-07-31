import { createPortal } from "react-dom";

function ReactPortal({ closeModal }) {
  return createPortal(
    <div style={overlay}>
      <div style={modal}>
        <h2>Welcome!</h2>

        <p>This Modal is rendered using React Portal.</p>

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
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  textAlign: "center",
};

export default ReactPortal;