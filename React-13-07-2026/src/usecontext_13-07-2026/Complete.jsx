import CarContext from "./CarContext";
import Home from "./Home";
import Finance from "./Finance";
import Insurance from "./Insurance";
import Delivery from "./Delivary";

function Complete() {

  const selectedCar = {
    brand: "Hyundai",
    model: "Creta",
    color: "Black",
    fuel: "Diesel",
    price: 1800000
  };

  return (
    <CarContext.Provider value={selectedCar}>
      <Home />
      <Finance/>
      <Insurance />
      <Delivery />
    </CarContext.Provider>
  );
}

export default Complete;