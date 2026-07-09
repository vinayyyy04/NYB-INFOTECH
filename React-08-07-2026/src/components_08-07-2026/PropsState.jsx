import { useState } from "react";
import Child from "./Child";

function PropsState() {
  const [age, setAge] = useState(21);

  return (
    <div>
      <h2>Parent Component</h2>

      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>

      <Child name="Vinay" age={age} />
    </div>
  );
}

export default PropsState;