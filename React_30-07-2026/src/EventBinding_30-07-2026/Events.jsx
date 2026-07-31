import { useState } from "react";

function Events() {
  const [name, setName] = useState("");

  const handleClick = () => {
    alert("Button Clicked");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Employee Registered: ${name}`);
  };

  const handleFocus = () => {
    console.log("Input Focused");
  };

  const handleBlur = () => {
    console.log("Input Lost Focus");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Employee Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Employee Name"
          value={name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <br /><br />

        <button type="button" onClick={handleClick}>
          Click Me
        </button>

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Events;