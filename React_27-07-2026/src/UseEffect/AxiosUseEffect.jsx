import { useEffect, useState } from "react";
import axios from "axios";

function AxiosUseEffect() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Product Store--UseEffect-Fetch & Axios</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            width="100"
          />
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default AxiosUseEffect;