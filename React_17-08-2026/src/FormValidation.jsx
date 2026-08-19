import { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }

    setError("");
    alert("Registration successful!");
  };

  return (
    <div>
      <h2>Registration Form--form validation</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        {error && <p>{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FormValidation;