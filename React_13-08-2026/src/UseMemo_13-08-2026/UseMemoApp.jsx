import { useMemo, useState } from "react";

function UseMemoApp() {
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(0);

  const price = 500;

  const total = useMemo(() => {
    console.log("Calculating total...");

    return price * quantity;
  }, [quantity]);

  return (
    <div>
      <h1>Shopping Cart-UseMemo</h1>

      <h2>Price: ₹{price}</h2>
      <h2>Quantity: {quantity}</h2>
      <h2>Total: ₹{total}</h2>

      <button onClick={() => setQuantity(quantity + 1)}>
        Add Product
      </button>

      <br /><br />

      <button onClick={() => setCount(count + 1)}>
        Other Button: {count}
      </button>
    </div>
  );
}

export default UseMemoApp;