import {
  useState,
  useEffect,
  useMemo,
  useCallback
} from "react";

import MovieCard from "./MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=21"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [movies, search]);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  if (loading) {
    return <h2 className="status">Loading movies...</h2>;
  }

  if (error) {
    return (
      <h2 className="status error">
        {error}
      </h2>
    );
  }

  return (
    <div className="page">
      <h1>Explore Movies 🎥</h1>

      <input
        className="search-box"
        placeholder="Search movies..."
        value={search}
        onChange={handleSearch}
      />

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;