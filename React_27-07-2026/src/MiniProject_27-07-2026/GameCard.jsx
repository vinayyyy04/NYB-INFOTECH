import React from "react";

function GameCard({ title, image, genre, platform }) {
  console.log(title, "Rendered");

  return (
    <div className="card">
      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p><strong>Genre:</strong> {genre}</p>

      <p><strong>Platform:</strong> {platform}</p>

      <button>Download</button>
    </div>
  );
}

export default React.memo(GameCard);