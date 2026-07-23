import { useState } from "react";

function Color() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>

      <p>Selected color: {color}</p>
    </div>
  );
}

export default Color;