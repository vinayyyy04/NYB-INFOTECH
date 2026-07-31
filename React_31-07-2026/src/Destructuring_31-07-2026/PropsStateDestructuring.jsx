import React from "react";


function PropsStateDestructuring() {
  const car = {
    name: "Hyundai Creta SX",
    brand: "Hyundai",
    variant: "SX",
    engine: "1.5L MPi Petrol",
    transmission: "6-Speed Manual",
    fuelType: "Petrol",
    mileage: "17.4 km/l",
    seatingCapacity: 5,
    color: "Atlas White",
    price: "₹16.50 Lakhs (Approx. Ex-Showroom)",
    airbags: 6,
    sunroof: "Panoramic Sunroof",
    infotainment: '10.25" Touchscreen',
    alloyWheels: "17-inch Diamond Cut Alloy Wheels",
    climateControl: "Dual Zone Automatic Climate Control",
    safety: "ABS, ESC, Hill Start Assist, TPMS",
  };

  const {
    name,
    brand,
    variant,
    engine,
    transmission,
    fuelType,
    mileage,
    seatingCapacity,
    color,
    price,
    airbags,
    sunroof,
    infotainment,
    alloyWheels,
    climateControl,
    safety,
  } = car;

  return (
    <div className="container">
      <div className="card">
        <h1>{name}</h1>
        <h3>{brand}</h3>

        <div className="details">
          <p><strong>Variant:</strong> {variant}</p>
          <p><strong>Engine:</strong> {engine}</p>
          <p><strong>Transmission:</strong> {transmission}</p>
          <p><strong>Fuel Type:</strong> {fuelType}</p>
          <p><strong>Mileage:</strong> {mileage}</p>
          <p><strong>Seating Capacity:</strong> {seatingCapacity}</p>
          <p><strong>Color:</strong> {color}</p>
          <p><strong>Price:</strong> {price}</p>
          <p><strong>Airbags:</strong> {airbags}</p>
          <p><strong>Sunroof:</strong> {sunroof}</p>
          <p><strong>Infotainment:</strong> {infotainment}</p>
          <p><strong>Alloy Wheels:</strong> {alloyWheels}</p>
          <p><strong>Climate Control:</strong> {climateControl}</p>
          <p><strong>Safety:</strong> {safety}</p>
        </div>
      </div>
    </div>
  );
}

export default PropsStateDestructuring;