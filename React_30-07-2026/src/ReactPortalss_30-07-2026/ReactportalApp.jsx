import { useState } from "react";
import Modal from "./Modal";

function ReactportalApp() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Portal Example</h1>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && (
        <Modal closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default ReactportalApp;