import { useState } from "react";

function Radiobuttons() {
  const [gender, setGender] = useState("");

  return (
    <>
      <label>
        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>

      <p>{gender}</p>
    </>
  );
}

export default Radiobuttons;