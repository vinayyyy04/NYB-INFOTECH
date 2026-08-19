import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Controlled Component</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <p>Your name: {name}</p>
    </div>
  );
}

export default ControlledComponent;