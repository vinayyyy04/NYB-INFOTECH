import { useEffect, useState } from "react";

function DependencyArray() {
  const [count, setCount] = useState(0);

  // 1. No dependency array
  useEffect(() => {
    console.log("Runs after every render");
  });

  // 2. Empty dependency array
  useEffect(() => {
    console.log("Runs only after the first render");
  }, []);

  // 3. Dependency array with a value
  useEffect(() => {
    console.log("Runs when count changes");
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default DependencyArray;