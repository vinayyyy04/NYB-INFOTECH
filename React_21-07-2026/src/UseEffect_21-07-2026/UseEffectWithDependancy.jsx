import { useEffect, useState } from "react";

function UseEffectWithDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Changed :", count);
  }, [count]);

  return (
    <div>
      <h2>useEffect With Dependency</h2>

      <p>Count : {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default UseEffectWithDependency;