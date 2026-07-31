import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductManagement() {
  const [cartCount, setCartCount] = useState(0);

  console.log("App Component Rendered");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Online Shopping</h1>

      <h2>Cart Items: {cartCount}</h2>

      <button onClick={() => setCartCount(cartCount + 1)}>
        Add to Cart
      </button>

      <hr />

      <ProductCard
        productName="Laptop"
        price={50000}
      />
    </div>
  );
}

export default ProductManagement;