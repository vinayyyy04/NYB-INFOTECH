import BikeCard from "./BikeCard";

function BikeList({ bikes }) {
  return (
    <div className="bike-list">
      {bikes.map((bike) => (
        <BikeCard
          key={bike.id}
          name={bike.name}
          price={bike.price}
        />
      ))}
    </div>
  );
}

export default BikeList;