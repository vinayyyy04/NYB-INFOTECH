import React from "react";
import Car from "./Car";

function FunctionDestructuring() {
  const car = {
    name: "Hyundai Creta SX",
    brand: "Hyundai",
    variant: "SX",
    engine: "1.5L MPi Petrol",
    transmission: "6-Speed Manual",
    fuelType: "Petrol",
    mileage: "17.4 km/l",
    color: "Atlas White",
    price: "₹16.50 Lakhs",
  };

  return (
    <div className="container">
      <Car {...car} />
    </div>
  );
}

export default FunctionDestructuring;