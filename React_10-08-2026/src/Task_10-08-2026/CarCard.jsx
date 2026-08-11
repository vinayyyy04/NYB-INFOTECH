function CarCard({ car, onSelect }) {
  return (
    <div className="car-card">
      <div className="car-image">
        🚗
      </div>

      <div className="car-info">
        <h2>{car.name}</h2>

        <p className="brand">{car.brand}</p>

        <p>{car.description}</p>

        <div className="car-bottom">
          <h3>₹{car.price} Lakh</h3>

          <button onClick={() => onSelect(car)}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;