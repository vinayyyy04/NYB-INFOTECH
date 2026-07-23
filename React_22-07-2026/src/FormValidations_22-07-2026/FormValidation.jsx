import { useState } from "react";

function FormValidation() {
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

  <button type="submit">Submit</button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default FormValidation;