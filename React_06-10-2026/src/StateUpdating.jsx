import React, { useState } from "react";

function StateUpdating() {
  const [message, setMessage] = useState("Hello");

  const handleClick = () => {
    setMessage("Welcome to React!");
  };

  return (
    <div>
      <h2>{message}</h2>

      <button onClick={handleClick}>
        Change Message
      </button>
    </div>
  );
}

export default StateUpdating;