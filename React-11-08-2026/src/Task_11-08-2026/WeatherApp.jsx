import { useState, useEffect } from "react";

function WeatherApp() {
  // Selected city
  const [city, setCity] = useState("Hyderabad");

  // Weather data
  const [weather, setWeather] = useState(null);

  // Loading and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Show/hide details
  const [showDetails, setShowDetails] = useState(false);

  // City coordinates
  const cities = {
    Hyderabad: {
      latitude: 17.385,
      longitude: 78.4867,
    },

    Mumbai: {
      latitude: 19.076,
      longitude: 72.8777,
    },

    Delhi: {
      latitude: 28.6139,
      longitude: 77.209,
    },

    Bangalore: {
      latitude: 12.9716,
      longitude: 77.5946,
    },

    Chennai: {
      latitude: 13.0827,
      longitude: 80.2707,
    },
  };

  // Fetch weather whenever city changes
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");
        setShowDetails(false);

        const selectedCity = cities[city];

        const url =
          `https://api.open-meteo.com/v1/forecast` +
          `?latitude=${selectedCity.latitude}` +
          `&longitude=${selectedCity.longitude}` +
          `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature,precipitation`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Unable to fetch weather data");
        }

        const data = await response.json();

        setWeather(data.current);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  // Change city
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  if (loading) {
    return (
      <div className="message">
        <h2>🌤️ Loading weather...</h2>
      </div>
    );
  }

  return (
    <div className="container">

      <h1>🌤️ Weather Dashboard</h1>
      <br></br>

      <p className="subtitle">
        Check the current weather of different cities
      </p>

      {/* City Selection */}
      <div className="city-selector">

        <label>Select City:</label>

        <select value={city} onChange={handleCityChange}>
          {Object.keys(cities).map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>

      </div>

      {/* Error */}
      {error && (
        <div className="error">
          ❌ {error}
        </div>
      )}

      {/* Weather Card */}
      {weather && !error && (
        <div className="weather-card">

          <h2>📍 {city}</h2>

          <div className="temperature">
            {weather.temperature_2m}°C
          </div>

          <p>
            💧 Humidity:{" "}
            {weather.relative_humidity_2m}%
          </p>

          <p>
            💨 Wind Speed:{" "}
            {weather.wind_speed_10m} km/h
          </p>

          {/* Button */}
          <button
            onClick={() =>
              setShowDetails(!showDetails)
            }
          >
            {showDetails
              ? "Hide Details"
              : "View Details"}
          </button>

          {/* Details */}
          {showDetails && (
            <div className="details">

              <h3>🌤️ Weather Details</h3>

              <p>
                🌡️ Temperature:
                {" "}
                {weather.temperature_2m}°C
              </p>

              <p>
                🥵 Feels Like:
                {" "}
                {weather.apparent_temperature}°C
              </p>

              <p>
                💧 Humidity:
                {" "}
                {weather.relative_humidity_2m}%
              </p>

              <p>
                💨 Wind Speed:
                {" "}
                {weather.wind_speed_10m} km/h
              </p>

              <p>
                🌧️ Precipitation:
                {" "}
                {weather.precipitation} mm
              </p>

            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default WeatherApp;