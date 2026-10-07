import React, { useState } from "react";

function Task() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 25000 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Add Product
  const addProduct = () => {
    if (name && price) {
      const newProduct = {
        id: Date.now(),
        name: name,
        price: Number(price),
      };

      setProducts([...products, newProduct]);
      setName("");
      setPrice("");
    }
  };

  // Delete Product
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));

    if (selectedProduct?.id === id) {
      setSelectedProduct(null);
    }
  };

  // Edit Product
  const editProduct = (product) => {
    const newName = prompt("Enter product name:", product.name);
    const newPrice = prompt("Enter product price:", product.price);

    if (newName && newPrice) {
      setProducts(
        products.map((item) =>
          item.id === product.id
            ? {
                ...item,
                name: newName,
                price: Number(newPrice),
              }
            : item
        )
      );
    }
  };

  return (
    <div>
      <h1>Product Management</h1>

      {/* Add Product */}
      <h2>Add Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>

      {/* Product List */}
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button onClick={() => setSelectedProduct(product)}>
              View Details
            </button>

            <button onClick={() => editProduct(product)}>
              Edit
            </button>

            <button onClick={() => deleteProduct(product.id)}>
              Delete
            </button>
          </div>
        ))
      )}

      {/* Conditional Product Details */}
      {selectedProduct && (
        <div>
          <h2>Product Details</h2>

          <p>Name: {selectedProduct.name}</p>
          <p>Price: ₹{selectedProduct.price}</p>

          <button onClick={() => setSelectedProduct(null)}>
            Close Details
          </button>
        </div>
      )}
    </div>
  );
}

export default Task;