import { useState } from "react";
import Modal from "./Modal";
import Popup from "./Popup";
import Tooltip from "./Tooltip";

function PortalComponents() {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Portals</h1>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      <br /><br />

      <button onClick={() => setShowPopup(true)}>
        Open Popup
      </button>

      <br /><br />

      <Tooltip />

      {showModal && (
        <Modal closeModal={() => setShowModal(false)} />
      )}

      {showPopup && (
        <Popup closePopup={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default PortalComponents;