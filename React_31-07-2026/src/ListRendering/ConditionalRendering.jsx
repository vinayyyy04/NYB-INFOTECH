import React from "react";


function ConditionalRendering() {
  const bikes = [
    {
      id: 1,
      name: "Classic 350",
      price: "₹2.00 Lakhs",
      available: true,
    },
    {
      id: 2,
      name: "Hunter 350",
      price: "₹1.75 Lakhs",
      available: true,
    },
    {
      id: 3,
      name: "Bullet 350",
      price: "₹1.90 Lakhs",
      available: false,
    },
    {
      id: 4,
      name: "Meteor 350",
      price: "₹2.15 Lakhs",
      available: true,
    },
    {
      id: 5,
      name: "Himalayan 450",
      price: "₹3.10 Lakhs",
      available: false,
    },
    {
      id: 6,
      name: "Interceptor 650",
      price: "₹3.40 Lakhs",
      available: true,
    },
  ];

  return (
    <div className="container">
      <h1> Royal Enfield Showroom</h1>

      <div className="bike-container">
        {bikes.map((bike) => (
          <div className="card" key={bike.id}>
            <h2>{bike.name}</h2>
            <p><strong>Price:</strong> {bike.price}</p>

            {bike.available ? (
              <button className="available">Available</button>
            ) : (
              <button className="sold">Out of Stock</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConditionalRendering;