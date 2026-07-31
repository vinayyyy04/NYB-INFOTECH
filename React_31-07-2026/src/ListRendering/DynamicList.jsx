import React from "react";

function DynamicList() {
  const cars = [
    {
      id: 1,
      name: "Rolls Royce Phantom",
      brand: "Rolls Royce",
      price: "₹10.50 Crore",
      color: "Black",
    },
    {
      id: 2,
      name: "Lamborghini Huracan",
      brand: "Lamborghini",
      price: "₹4.00 Crore",
      color: "Yellow",
    },
    {
      id: 3,
      name: "Mercedes-Benz G-Class",
      brand: "Mercedes",
      price: "₹3.30 Crore",
      color: "White",
    },
    {
      id: 4,
      name: "Mahindra Thar",
      brand: "Mahindra",
      price: "₹18 Lakhs",
      color: "Red",
    },
    {
      id: 5,
      name: "Hyundai Creta",
      brand: "Hyundai",
      price: "₹20 Lakhs",
      color: "Blue",
    },
    {
      id: 6,
      name: "Toyota Fortuner",
      brand: "Toyota",
      price: "₹55 Lakhs",
      color: "Silver",
    },
  ];

  return (
    <div className="container">
      <h1>MY Car Showroom</h1>

      <div className="car-container">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <h2>{car.name}</h2>
            <p><strong>Brand:</strong> {car.brand}</p>
            <p><strong>Price:</strong> {car.price}</p>
            <p><strong>Color:</strong> {car.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicList;