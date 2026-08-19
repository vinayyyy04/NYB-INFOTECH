import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        CampusHub
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/register">Register</Link>
        <Link to="/my-registrations">
          My Registrations
        </Link>
        <Link to="/about">About</Link>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

    </nav>
  );
}

export default Navbar;