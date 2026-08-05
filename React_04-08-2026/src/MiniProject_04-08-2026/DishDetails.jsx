import { useParams } from "react-router-dom";

function DishDetails() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Dish Details</h1>

      <h2>Dish ID: {id}</h2>
    </div>
  );
}

export default DishDetails;