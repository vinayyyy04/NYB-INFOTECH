import { useState } from "react";

function UseState() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>iPhone 14</h2>

      <h3>Quantity: {quantity}</h3>

      <button onClick={() => setQuantity(quantity + 1)}>
        +
      </button>

      <button onClick={() => setQuantity(quantity - 1)}>
        -
      </button>
    </div>
  );
}

export default UseState;