import React from "react";

const ProductCard = React.memo(({ name, price }) => {
  console.log("ProductCard rendered");

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
    </div>
  );
});

export default ProductCard;