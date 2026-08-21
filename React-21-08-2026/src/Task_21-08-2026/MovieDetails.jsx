import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  return (
    <div className="page details">
      <h1>Movie Details 🎬</h1>

      <div className="details-card">
        <h2>Movie ID: {id}</h2>

        <p>
          The ID is taken dynamically from the URL.
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;