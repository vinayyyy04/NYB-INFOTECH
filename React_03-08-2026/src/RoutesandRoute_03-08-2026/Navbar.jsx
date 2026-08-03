import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/suvs">SUVs</Link> |{" "}
      <Link to="/sedans">Sedans</Link> |{" "}
      <Link to="/sports">Sports</Link>
    </nav>
  );
}

export default Navbar;