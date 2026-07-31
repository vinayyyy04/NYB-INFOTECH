import { useState, useCallback } from "react";
import Child from "./Child";

function WithCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  console.log("App Rendered");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useCallback Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <hr />

      <Child onClick={handleClick} />
    </div>
  );
}

export default WithCallback;