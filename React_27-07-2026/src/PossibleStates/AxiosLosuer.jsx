import { useEffect, useState } from "react";
import axios from "axios";

function AxiosLosuer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Employee List--Axios</h1>

      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default AxiosLosuer;