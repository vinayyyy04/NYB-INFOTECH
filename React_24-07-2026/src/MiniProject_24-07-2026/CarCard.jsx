function CarCard({ car }) {
  return (
    <div className="card">
     <img src={car.image} alt={car.name} />

      <h2>{car.name}</h2>

      <h3>{car.price}</h3>
    </div>
  );
}

export default CarCard;