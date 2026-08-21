import { useMemo } from "react";

function ExpensiveCalculation({ number }) {
  console.log("Calculation component rendered");

  const result = useMemo(() => {
    console.log("Expensive calculation running...");

    let total = 0;

    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    return total * number;
  }, [number]);

  return (
    <div className="calculation-card">
      <h2>useMemo Example</h2>

      <p>
        Calculated Result:
      </p>

      <h1>{result}</h1>
    </div>
  );
}

export default ExpensiveCalculation;