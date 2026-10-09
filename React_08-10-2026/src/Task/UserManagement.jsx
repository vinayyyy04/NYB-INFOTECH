import { useEffect, useState } from "react";

import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "./Api";

function UserManagement() {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // GET USERS
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getUsers();

      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ADD / UPDATE USER
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Please enter name and email");
      return;
    }

    try {
      setError("");

      const userData = {
        name,
        email,
      };

      if (editingId) {
        // UPDATE
        const updatedUser = await updateUser(
          editingId,
          userData
        );

        setUsers(
          users.map((user) =>
            user.id === editingId
              ? { ...user, ...updatedUser }
              : user
          )
        );

        setEditingId(null);
      } else {
        // ADD
        const newUser = await addUser(userData);

        setUsers([...users, newUser]);
      }

      setName("");
      setEmail("");
    } catch (err) {
      setError(err.message);
    }
  };

  // EDIT
  const handleEdit = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      setError("");

      await deleteUser(id);

      setUsers(
        users.filter((user) => user.id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // SEARCH + FILTER
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      user.name.toLowerCase().startsWith(filter.toLowerCase());

    return matchesSearch && matchesFilter;
  });

  // LOADING STATE
  if (loading) {
    return <h2>Loading users...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>User Management</h1>

      {/* ERROR */}
      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          {editingId ? "Update User" : "Add User"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setName("");
              setEmail("");
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <hr />

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTER */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All Users</option>
        <option value="A">Names starting with A</option>
        <option value="B">Names starting with B</option>
        <option value="C">Names starting with C</option>
        <option value="D">Names starting with D</option>
      </select>

      {/* USER LIST */}
      <div>
        {filteredUsers.length === 0 ? (
          <h3>No users found</h3>
        ) : (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                margin: "10px 0",
              }}
            >
              <h3>{user.name}</h3>

              <p>{user.email}</p>

              <button
                onClick={() => handleEdit(user)}
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserManagement;