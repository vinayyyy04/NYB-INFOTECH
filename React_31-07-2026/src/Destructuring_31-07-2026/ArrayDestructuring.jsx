import React from "react";

function ArrayDestructuring() {        //withSpread operator...
  const bikes = [
    "Classic 350",
    "Hunter 350",
    "Bullet 350",
    "Meteor 350",
    "Himalayan 450",
  ];

  const [firstBike, secondBike, ...remainingBikes] = bikes;

  return (
    <div>
      <h1>Royal Enfield Bikes</h1>

      <p>First Bike: {firstBike}</p>
      <p>Second Bike: {secondBike}</p>

      <h3>Remaining Bikes</h3>

      {remainingBikes.map((bike, index) => (
        <p key={index}>{bike}</p>
      ))}
    </div>
  );
}

export default ArrayDestructuring;