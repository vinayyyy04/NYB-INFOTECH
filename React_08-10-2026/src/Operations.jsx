import { useState } from "react";

function Operations() {
  const [users, setUsers] = useState([]);

  // POST - Create new user
  const addUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Vinay",
          email: "ok@gmail.com",
        }),
      }
    );

    const newUser = await response.json();

    setUsers([...users, newUser]);
  };

  // PUT - Update complete user
  const updateUser = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Updated User",
          email: "updated@example.com",
        }),
      }
    );

    const updatedUser = await response.json();

    setUsers(
      users.map((user) =>
        user.id === id ? updatedUser : user
      )
    );
  };

  // PATCH - Update specific user field
  const patchUser = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Patched User",
        }),
      }
    );

    const updatedUser = await response.json();

    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, ...updatedUser }
          : user
      )
    );
  };

  // DELETE - Remove user
  const deleteUser = async (id) => {
    await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE",
      }
    );

    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>User Management</h1>

      <button onClick={addUser}>POST - Add User</button>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <button onClick={() => updateUser(user.id)}>
            PUT - Update
          </button>

          <button onClick={() => patchUser(user.id)}>
            PATCH - Update Name
          </button>

          <button onClick={() => deleteUser(user.id)}>
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
}

export default Operations;