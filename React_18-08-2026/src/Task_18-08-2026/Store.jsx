import { useEffect, useState } from "react";

function Store() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Search and category filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Loading state
  if (loading) {
    return (
      <div className="message">
        <h2>Loading products...</h2>
        <p>Please wait while we get the products.</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="message error">
        <h2>Something went wrong!</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="app">

      <header>
        <h1>🛒 My Product Store</h1>
        <p>Find the products you are looking for</p>
      </header>

      <section className="filters">

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>

      </section>

      <p className="result">
        {filteredProducts.length} products found
      </p>

      <section className="products">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>

              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <div className="product-info">

                <h2>{product.title}</h2>

                <p className="category">
                  {product.category}
                </p>

                <p>{product.description}</p>

                <div className="bottom">

                  <span className="price">
                    ${product.price}
                  </span>

                  <span className="rating">
                    ⭐ {product.rating}
                  </span>

                </div>

              </div>

            </div>
          ))
        ) : (
          <div className="no-results">
            <h2>No products found 😕</h2>
            <p>Try another search or category.</p>
          </div>
        )}

      </section>

    </div>
  );
}

export default Store;