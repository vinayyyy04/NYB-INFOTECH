import React from "react";

const Product = React.memo(({ addToCart }) => {
  console.log("Product rendered");

  return (
    <div>
      <h2>Laptop</h2>
      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
});

export default Product;