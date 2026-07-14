import { useContext } from "react";
import CarContext from "./CarContext";

function Delivery() {

  const car = useContext(CarContext);

  return (
    <div>
      <h2>Delivery Department</h2>
      <p>Your {car.brand} {car.model} is ready for delivery.</p>
    </div>
  );
}

export default Delivery;