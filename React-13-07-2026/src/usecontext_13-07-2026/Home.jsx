import { useContext } from "react";
import CarContext from "./CarContext";

function Home() {

  const car = useContext(CarContext);

  return (
    <div>
      <h2>Selected Car</h2>
      <p>Brand : {car.brand}</p>
      <p>Model : {car.model}</p>
      <p>Color : {car.color}</p>
    </div>
  );
}

export default Home;