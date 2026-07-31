import React from "react";

function ObjectDestructuring() {
  const cars = [
    {
      id: 1,
      name: "Mahindra Thar",
      brand: "Mahindra",
      price: "₹18 Lakhs",
      color: "Red",
    },
    {
      id: 2,
      name: "Hyundai Creta",
      brand: "Hyundai",
      price: "₹20 Lakhs",
      color: "Blue",
    },
    {
      id: 3,
      name: "Toyota Fortuner",
      brand: "Toyota",
      price: "₹55 Lakhs",
      color: "White",
    },
  ];

  return (
    <div>
      <h1>Car Showroom</h1>

      {cars.map((car) => {
        const { id, name, brand, price, color } = car;

        return (
          <div key={id}>
            <h2>{name}</h2>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Color: {color}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default ObjectDestructuring;