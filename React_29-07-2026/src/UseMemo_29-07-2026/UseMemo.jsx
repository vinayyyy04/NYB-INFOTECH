import { useState, useMemo } from "react";

function UseMemo() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  function factorial(n) {
    console.log("Calculating Factorial...");
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  const factorialResult = useMemo(() => {
    return factorial(number);
  }, [number]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useMemo</h1>

      <h2>Factorial: {factorialResult}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <h2>Count: {count}</h2>
    </div>
  );
}

export default UseMemo;