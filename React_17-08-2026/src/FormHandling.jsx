import { useState } from "react";

function FormHandling() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Login submitted!");
  };

  return (
    <div>
      <h2>Login Form--form handling</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default FormHandling;