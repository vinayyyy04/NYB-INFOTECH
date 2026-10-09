import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";

// Context API
const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom Hook for API
function useUsers() {
  const { users, setUsers } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load users");
        return res.json();
      })
      .then(setUsers)
      .catch(() => setError("Unable to fetch users"))
      .finally(() => setLoading(false));
  }, [setUsers]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return {
    users,
    setUsers,
    loading,
    error,
    search,
    setSearch,
    filteredUsers,
  };
}

// Reusable Child Component
function UserCard({ user, onDelete }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
}

// Main Component
function UserApp() {
  const { users, setUsers, loading, error, search, setSearch, filteredUsers } =
    useUsers();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function addUser(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setUsers((previous) => [
      ...previous,
      { id: Date.now(), name, email },
    ]);

    setName("");
    setEmail("");
  }

  function deleteUser(id) {
    setUsers((previous) => previous.filter((user) => user.id !== id));
  }

  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h1>User Management App</h1>

      <form onSubmit={addUser}>
        <input
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Add User</button>
      </form>

      <input
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} onDelete={deleteUser} />
        ))
      )}
    </div>
  );
}

export default function Task() {
  return (
    <UserProvider>
      <UserApp />
    </UserProvider>
  );
}