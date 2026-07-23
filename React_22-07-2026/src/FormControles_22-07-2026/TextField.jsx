import { useState } from "react";

function TextField() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      <p>{name}</p>
    </>
  );
}

export default TextField;