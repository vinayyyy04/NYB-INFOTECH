import { useState } from "react";

function Filtering() {
  const [category, setCategory] = useState("All");

  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "T-Shirt", category: "Clothing" },
    { id: 3, name: "Mobile", category: "Electronics" },
    { id: 4, name: "Shoes", category: "Clothing" }
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div>
      <h1>Product Filter</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
      </select>

      {filteredProducts.map((product) => (
        <p key={product.id}>
          {product.name} - {product.category}
        </p>
      ))}
    </div>
  );
}

export default Filtering;