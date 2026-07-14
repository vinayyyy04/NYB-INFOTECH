import { useContext } from "react";
import CarContext from "./CarContext";

function Finance() {

  const car = useContext(CarContext);

  return (
    <div>
      <h2>Finance Department</h2>
      <p>Calculating EMI for {car.brand} {car.model}</p>
      <p>Price : ₹{car.price}</p>
    </div>
  );
}

export default Finance;