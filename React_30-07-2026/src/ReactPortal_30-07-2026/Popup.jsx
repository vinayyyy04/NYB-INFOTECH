import { createPortal } from "react-dom";

function Popup({ closePopup }) {
  return createPortal(
    <div style={popupStyle}>
      <p>Data Saved Successfully ✅</p>

      <button onClick={closePopup}>
        OK
      </button>
    </div>,
    document.getElementById("portal-root")
  );
}

const popupStyle = {
  position: "fixed",
  top: "20px",
  right: "20px",
  background: "green",
  color: "white",
  padding: "15px",
  borderRadius: "10px",
};

export default Popup;