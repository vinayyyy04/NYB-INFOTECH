function Map() {

  const products = [
    { id: 1, name: "Laptop", price: 160000 },
    { id: 2, name: "Mobile", price: 65000 },
    { id: 3, name: "Headphones", price: 9000 }
  ];

  return (
    <div>
      <h1>Products</h1>

      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Map;