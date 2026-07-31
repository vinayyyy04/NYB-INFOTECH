import React, { useState, useMemo, useCallback } from "react";

// React.memo Component
const Employee = React.memo(({ name }) => {
  console.log("Employee Rendered");
  return (
    <div className="card">
      <h3>React.memo()</h3>
      <p>Employee: {name}</p>
    </div>
  );
});

// useCallback Component
const Button = React.memo(({ handleClick }) => {
  console.log("Button Rendered");
  return (
    <div className="card">
      <h3>useCallback()</h3>
      <button onClick={handleClick}>Show Message</button>
    </div>
  );
});

// PureComponent
class Student extends React.PureComponent {
  render() {
    console.log("Student Rendered");
    return (
      <div className="card">
        <h3>PureComponent</h3>
        <p>Name: {this.props.name}</p>
      </div>
    );
  }
}

function MiniProject() {
  console.log("App Rendered");

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // useMemo
  const factorial = useMemo(() => {
    console.log("Factorial Calculated");
    let fact = 1;
    for (let i = 1; i <= number; i++) {
      fact *= i;
    }
    return fact;
  }, [number]);

  // useCallback
  const showMessage = useCallback(() => {
    alert("Hello vinay!");
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        background: "#f4f8ff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>React Performance Optimization</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          margin: "20px auto",
          width: "350px",
          borderRadius: "10px",
          boxShadow: "0 0 10px gray",
        }}
      >
        <h2>Counter</h2>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <Employee name="vinay" />

      <div
        className="card"
        style={{
          background: "white",
          padding: "20px",
          margin: "20px auto",
          width: "350px",
          borderRadius: "10px",
          boxShadow: "0 0 10px gray",
        }}
      >
        <h3>useMemo()</h3>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />

        <p>Factorial: {factorial}</p>
      </div>

      <Button handleClick={showMessage} />

      <Student name="Vinay" />
    </div>
  );
}

export default MiniProject;