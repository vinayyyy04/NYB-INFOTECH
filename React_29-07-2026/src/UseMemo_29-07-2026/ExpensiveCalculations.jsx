import { useState, useMemo } from "react";

function ExpensiveCalculations() {
  const [number, setNumber] = useState(100000000);
  const [count, setCount] = useState(0);

  function calculateSum(num) {
    console.log("Calculating Sum...");

    let sum = 0;

    for (let i = 1; i <= num; i++) {
      sum += i;
    }

    return sum;
  }

  const totalSum = useMemo(() => {
    return calculateSum(number);
  }, [number]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1> Expensive Calculations</h1>

      <h2>Sum: {totalSum}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <h2>Count: {count}</h2>
    </div>
  );
}

export default ExpensiveCalculations;