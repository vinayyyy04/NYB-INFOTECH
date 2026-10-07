import React, { useState } from "react";

function Parent() {
  const [message, setMessage] = useState("No message yet");

  const updateMessage = () => {
    setMessage("Message updated by Child!");
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>{message}</p>

      <Child onUpdate={updateMessage} />
    </div>
  );
}

function Child({ onUpdate }) {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onUpdate}>Update Message</button>
    </div>
  );
}

function PassingProps() {
  return <Parent />;
}

export default PassingProps;