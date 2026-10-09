import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Keerthy" },
    { id: 3, name: "Vinay" },
    { id: 4, name: "Anil" }
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>User Search</h1>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        filteredUsers.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))
      )}
    </div>
  );
}

export default Search;