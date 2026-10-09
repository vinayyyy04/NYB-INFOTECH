import useProducts from "./useProducts";
import ProductCard from "./ProductCard";


const initialProducts = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Keyboard", price: 1500 },
];
function Refractor() {
  const {
    products,
    search,
    setSearch,
    deleteProduct,
  } = useProducts(initialProducts);

  return (
    <div className="container">
      <h1>Product Management</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={deleteProduct}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Refractor;