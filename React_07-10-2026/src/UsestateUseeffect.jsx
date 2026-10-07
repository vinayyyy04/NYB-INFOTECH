import { useState, useEffect } from "react";

function UsestateUseeffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`You clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>{message}</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default UsestateUseeffect;