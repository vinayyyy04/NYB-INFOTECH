import { useState } from "react";
import { createPortal } from "react-dom";

function Tooltip() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        Hover Me
      </button>

      {show &&
        createPortal(
          <div style={tooltipStyle}>
            This is a Tooltip
          </div>,
          document.getElementById("portal-root")
        )}
    </>
  );
}

const tooltipStyle = {
  position: "fixed",
  top: "220px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "black",
  color: "white",
  padding: "8px",
  borderRadius: "5px",
};

export default Tooltip;