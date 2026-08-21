import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home page">
      <h1>Find Your Next Favorite Movie 🎬</h1>

      <p>
        Search and explore movies in this small
        React application.
      </p>

      <Link to="/movies" className="primary-btn">
        Explore Movies
      </Link>
    </div>
  );
}

export default Home;