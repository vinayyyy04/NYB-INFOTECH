import { useEffect, useState } from "react";

function Task() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  // useEffect
  useEffect(() => {
    console.log("User list updated:", users);
  }, [users]);

  // Handle multiple form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Register / Update user
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.age) {
      setError("Please fill all fields");
      return;
    }

    if (formData.age < 18) {
      setError("Age must be 18 or above");
      return;
    }

    setError("");

    if (editId !== null) {
      // Edit user
      setUsers(
        users.map((user) =>
          user.id === editId
            ? { ...user, ...formData }
            : user
        )
      );

      setEditId(null);
    } else {
      // Add new user
      const newUser = {
        id: Date.now(),
        ...formData
      };

      setUsers([...users, newUser]);
    }

    // Clear form
    setFormData({
      name: "",
      email: "",
      age: ""
    });
  };

  // Edit user
  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      age: user.age
    });

    setEditId(user.id);
  };

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>User Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          {editId !== null ? "Update User" : "Register User"}
        </button>
      </form>

      {/* Conditional Rendering */}
      {error && <p>{error}</p>}

      <hr />

      <h2>User List</h2>

      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email} - {user.age}

              <button onClick={() => handleEdit(user)}>
                Edit
              </button>

              <button onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Task;