import { useState } from "react";

function Color() {
  const [color, setColor] = useState("Red");

  return (
    <>
      <h2>Color: {color}</h2>

      <button onClick={() => setColor("Black")}>
        Change Color
      </button>
    </>
  );
}

export default Color;