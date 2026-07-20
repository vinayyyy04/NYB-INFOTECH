import axios from "Axios";
import { useEffect, useState } from "react";

function Axioss() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data));

  }, []);

  return (
    <>
      {users.map(user => (
        <h3 key={user.id}>
          {user.name}
        </h3>
      ))}
    </>
  );
}

export default Axioss;