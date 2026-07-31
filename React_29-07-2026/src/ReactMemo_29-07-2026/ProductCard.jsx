import React from "react";

function ProductCard({ productName, price }) {
  console.log("Product Card Rendered");

  return (
    <div>
      <h2>Product Details</h2>

      <p>Product: {productName}</p>

      <p>Price: ₹{price}</p>
    </div>
  );
}

export default React.memo(ProductCard);