import React from "react";

function Car({
  name,
  brand,
  variant,
  engine,
  transmission,
  fuelType,
  mileage,
  color,
  price,
}) {
  return (
    <div className="card">
      <h1>{name}</h1>

      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Variant:</strong> {variant}</p>
      <p><strong>Engine:</strong> {engine}</p>
      <p><strong>Transmission:</strong> {transmission}</p>
      <p><strong>Fuel Type:</strong> {fuelType}</p>
      <p><strong>Mileage:</strong> {mileage}</p>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
}

export default Car;