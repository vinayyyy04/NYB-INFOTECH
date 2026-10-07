import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

function Usestate() {
  return <Counter />;
}

export default Usestate;