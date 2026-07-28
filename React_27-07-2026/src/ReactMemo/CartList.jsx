import React from "react";

function CartList({ count }) {
  console.log("Cart Rendered");

  return (
    <div>
      <h2>🛒 Cart Items: {count}</h2>
    </div>
  );
}

export default React.memo(CartList);