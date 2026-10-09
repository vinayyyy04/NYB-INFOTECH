import { useState } from "react";

function useProducts(initialProducts) {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteProduct = (id) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  return {
    products: filteredProducts,
    search,
    setSearch,
    deleteProduct,
  };
}

export default useProducts;