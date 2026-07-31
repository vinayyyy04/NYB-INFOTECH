import { useState, useEffect } from "react";


function useFetch(url) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [url]);

  return users;
}


function APICalls() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <h2>Employee List</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default APICalls;