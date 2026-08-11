import { useState } from "react";
import Navbar from "./Navbar";
import CarList from "./CarList";


function ShowRoomApp() {
  // State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  // Car list
  const cars = [
    {
      id: 1,
      name: "Thar",
      brand: "Mahindra",
      price: "15.50",
      description: "Powerful SUV built for adventure.",
    },
    {
      id: 2,
      name: "Creta",
      brand: "Hyundai",
      price: "14.20",
      description: "Comfortable and stylish family SUV.",
    },
    {
      id: 3,
      name: "X1",
      brand: "BMW",
      price: "52.00",
      description: "Luxury SUV with premium performance.",
    },
    {
      id: 4,
      name: "Fortuner",
      brand: "Toyota",
      price: "33.50",
      description: "Reliable SUV with powerful performance.",
    },
    {
      id: 5,
      name: "Nexon",
      brand: "Tata",
      price: "10.20",
      description: "Safe and modern compact SUV.",
    },
    {
      id: 6,
      name: "Virtus",
      brand: "Volkswagen",
      price: "14.00",
      description: "Sporty sedan with excellent driving dynamics.",
    },
  ];

  // Login / Logout
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    setSelectedCar(null);
  };

  // Select car
  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="app">

      <Navbar
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}/>

      {/* Hero Section */}
      <section className="hero">
        <div>
          <p className="small-title">WELCOME TO AUTOHUB</p>

          <h1>
            Find Your
            <span> Dream Car</span>
          </h1>

          <p>
            Explore our collection of premium,
            powerful and stylish cars.
          </p>

          {!isLoggedIn && (
            <button
              className="hero-btn"
              onClick={handleLogin}>
              Login to Explore
            </button>
          )}
        </div>

        <div className="hero-car">
          🚘
        </div>
      </section>

      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <section className="showroom">

          <div className="section-heading">
            <div>
              <p className="small-title">OUR COLLECTION</p>
              <h2>Featured Cars</h2>
            </div>

            <p>{cars.length} Cars Available</p>
          </div>

          {/* List Rendering */}
          <CarList
            cars={cars}
            onSelect={handleSelectCar}/>

          {/* Selected Car */}
          {selectedCar && (
            <div className="selected-car">

              <div>
                <p className="small-title">
                  SELECTED CAR
                </p>

                <h2>
                  {selectedCar.brand} {selectedCar.name}
                </h2>

                <p>
                  {selectedCar.description}
                </p>
              </div>

              <div>
                <h2>
                  ₹{selectedCar.price} Lakh
                </h2>

                <button
                  onClick={() => setSelectedCar(null)}>
                  Close
                </button>
              </div>

            </div>
          )}

        </section>
      ) : (
        /* Conditional Rendering */
        <section className="login-message">
          <h2>🔐 Login Required</h2>

          <p>
            Please login to view our complete
            car collection.
          </p>

          <button onClick={handleLogin}>
            Login Now
          </button>
        </section>
      )}

      <footer>
        <p>© 2026 AutoHub. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default ShowRoomApp;