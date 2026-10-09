function ProductCard({ product, onDelete }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>

      <button onClick={() => onDelete(product.id)}>
        Delete
      </button>
    </div>
  );
}

export default ProductCard;