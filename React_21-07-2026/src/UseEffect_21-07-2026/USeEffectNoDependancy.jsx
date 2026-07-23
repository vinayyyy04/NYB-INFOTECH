import { useEffect, useState } from "react";

function UseEffectNoDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Runs after every render");
  });

  return (
    <div>
      <h2>useEffect Without Dependency Array</h2>

      <p>Count : {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default UseEffectNoDependency;