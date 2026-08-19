import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    event: "Innovation Summit",
  });

  const [registered, setRegistered] =
    useLocalStorage("registered", false);

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email) {
      setError("Please fill all fields.");
      return;
    }

    setError("");
    setRegistered(true);
  }

  return (
    <section className="form-page">

      <div className="form-card">

        <span className="badge">
          JOIN AN EVENT
        </span>

        <h1>Event Registration</h1>

        {registered ? (
          <div className="success">
            🎉 Registration successful!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            <label>Name</label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <label>Choose Event</label>

            <select
              name="event"
              value={form.event}
              onChange={handleChange}
            >
              <option>Innovation Summit</option>
              <option>Photography Walk</option>
              <option>Startup Pitch Day</option>
              <option>Football Tournament</option>
            </select>

            {error && (
              <p className="error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="primary-btn full"
            >
              Register
            </button>

          </form>
        )}

      </div>

    </section>
  );
}

export default Register;