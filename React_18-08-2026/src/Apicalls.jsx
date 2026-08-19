import { useEffect, useState } from "react";

function Apicalls() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Apicalls;