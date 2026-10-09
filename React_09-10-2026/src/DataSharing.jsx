import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const UserContext = createContext();

// 2. Create Provider Component
function UserProvider({ children }) {
  const [username, setUsername] = useState("Vinay");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Component to Display Data
function UserProfile() {
  const { username } = useContext(UserContext);

  return <h2>Welcome, {username}!</h2>;
}

// 4. Component to Update Data
function UpdateUser() {
  const { username, setUsername } = useContext(UserContext);

  return (
    <div>
      <p>Current User: {username}</p>

      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Enter username"
      />
    </div>
  );
}

// 5. Main App Component
export default function DataSharing() {
  return (
    <UserProvider>
      <h1>Context API Example</h1>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
}