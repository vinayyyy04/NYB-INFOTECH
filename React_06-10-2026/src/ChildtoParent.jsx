import React, { useState } from "react";

function Parent() {
  const [message, setMessage] = useState("");

  const receiveData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from Child: {message}</p>

      <Child sendData={receiveData} />
    </div>
  );
}

function Child({ sendData }) {
  const handleClick = () => {
    sendData("Hello Parent!");
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Send Data</button>
    </div>
  );
}

function ChildtoParent() {
  return <Parent />;
}

export default ChildtoParent;