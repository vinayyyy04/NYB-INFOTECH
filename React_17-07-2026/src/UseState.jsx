import { useState } from "react";

function UseState() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <h2>Quantity: {quantity}</h2>

      <button onClick={() => setQuantity(quantity + 1)}>
        Add Item
      </button>
    </>
  );
}

export default UseState;