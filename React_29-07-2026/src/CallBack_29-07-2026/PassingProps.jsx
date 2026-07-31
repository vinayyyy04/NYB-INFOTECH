import { useState, useCallback } from "react";
import Employee from "./Employee";

function PassingProps() {
  const [count, setCount] = useState(0);

  // Memoized function
  const showMessage = useCallback(() => {
    alert("Welcome Vinay!");
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

      <Employee
        name="Vinay"
        onShowMessage={showMessage}
      />
    </div>
  );
}

export default PassingProps;