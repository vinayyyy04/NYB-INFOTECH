import { useEffect, useState } from "react";

function Members() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(true);
      })
      .catch(() => {
        setError("Failed to load data");
        setLoading(true);
      });
  }, []);

  if (loading) {
    return <h2>Failed to LoadData</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Members;