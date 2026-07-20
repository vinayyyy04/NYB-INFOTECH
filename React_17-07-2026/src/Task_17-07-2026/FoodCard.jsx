import { useContext } from "react";
import { CartContext } from "./CartContext";

function FoodCard({ food }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
        width: "220px",
      }}
    >
      <img src={food.image} width="200" />

      <h3>{food.name}</h3>

      <p>Cuisine: {food.cuisine}</p>

      <button onClick={() => addToCart(food)}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;