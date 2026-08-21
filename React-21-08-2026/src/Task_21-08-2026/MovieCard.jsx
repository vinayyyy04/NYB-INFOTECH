import React from "react";
import { Link } from "react-router-dom";

const MovieCard = React.memo(({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.thumbnailUrl}
        alt={movie.title}
      />

      <h3>{movie.title}</h3>

      <Link to={`/movies/${movie.id}`}>
        View Details
      </Link>
    </div>
  );
});

export default MovieCard;