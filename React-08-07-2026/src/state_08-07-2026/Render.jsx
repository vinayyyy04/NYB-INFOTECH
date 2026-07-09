import { useState } from "react";

function Render() {
  return (
    <>
      <Student name="Vinay" age={23} />
    </>
  );
}

function Student(props) {
  const [city, setCity] = useState("Hyderabad");

  return (
    <>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>City: {city}</h2>

      <button onClick={() => setCity("Medak")}>
        Change City
      </button>
    </>
  );
}

export default Render;