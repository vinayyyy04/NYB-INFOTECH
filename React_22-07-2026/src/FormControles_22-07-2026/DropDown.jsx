import { useState } from "react";

function DropDown() {
  const [city, setCity] = useState("");

  return (
    <>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select City</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      <p>City: {city}</p>
    </>
  );
}

export default DropDown;