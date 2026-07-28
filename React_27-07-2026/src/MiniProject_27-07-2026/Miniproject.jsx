import { useEffect, useState } from "react";
import GameCard from "./GameCard";


function MiniProject() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch games");
        }
        return res.json();
      })
      .then((data) => {
        setGames(data.slice(0, 12));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading Games...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h1>🎮 Game Store</h1>

      <div className="games">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            image={game.thumbnail}
            genre={game.genre}
            platform={game.platform}
          />
        ))}
      </div>
    </div>
  );
}

export default MiniProject;