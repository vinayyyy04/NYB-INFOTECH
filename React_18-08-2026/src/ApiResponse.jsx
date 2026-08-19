import { useEffect, useState } from "react";

function ApiResponse() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h2>User Details</h2>

      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default ApiResponse;