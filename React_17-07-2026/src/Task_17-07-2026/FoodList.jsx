import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setFoods(data.recipes));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {foods.slice(0, 8).map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}

export default FoodList;