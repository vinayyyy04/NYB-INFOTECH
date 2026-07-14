import { useContext } from "react";
import CarContext from "./CarContext";

function Insurance() {

  const car = useContext(CarContext);

  return (
    <div>
      <h2>Insurance Department</h2>
      <p>Insurance for {car.color} {car.model}</p>
    </div>
  );
}

export default Insurance;