import React from "react";

function ProductList() {
  console.log("ProductList Rendered");

  return (
    <div>
      <h2>Products</h2>

      <p>📱 iPhone</p>
      <p>💻 Laptop</p>
      <p>🎧 Headphones</p>
    </div>
  );
}

export default React.memo(ProductList);