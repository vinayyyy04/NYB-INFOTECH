import { useState } from "react";

function ErrorHandling() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Name is required");
    } else {
      setError("");
      alert("Form Submitted Successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>

{error && <p style={{ color: "red"}}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default ErrorHandling;