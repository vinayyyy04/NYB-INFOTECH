import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./CartList";

function ReactMemo() {
  const [count, setCount] = useState(0);

  console.log("App Rendered");

  return (
    <div>
      <h1>Shopping App</h1>

      <button onClick={() => setCount(count + 1)}>
        Add to Cart ({count})
      </button>

      <ProductList />

      <Cart count={count} />
    </div>
  );
}

export default ReactMemo;