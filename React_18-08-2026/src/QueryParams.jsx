import { useState } from "react";

function QueryParams() {
  const [users, setUsers] = useState([]);

  const searchUser = () => {
    fetch(
      "https://jsonplaceholder.typicode.com/users?name=Leanne"
    )
      .then(response => response.json())
      .then(data => setUsers(data));
  };

  return (
    <div>
      <button onClick={searchUser}>Search User</button>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default QueryParams;