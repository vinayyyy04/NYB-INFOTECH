import { useState } from "react";
import ProductCard from "./ProductCard";

function ReactMemoApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Shopping Iphone--ReactMemo</h1>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>

      <ProductCard name="iPhone" price={70000} />
    </div>
  );
}

export default ReactMemoApp;