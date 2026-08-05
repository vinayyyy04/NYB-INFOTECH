import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="page">
      <h1>Our Menu</h1>

      <ul>
        <li>
          <Link to="/menu/1">Chicken Biryani</Link>
        </li>

        <li>
          <Link to="/menu/2">Mutton Curry</Link>
        </li>

        <li>
          <Link to="/menu/3">Paneer Butter Masala</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;