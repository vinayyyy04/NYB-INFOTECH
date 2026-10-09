import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const AppContext = createContext();

// 2. Create Provider
function AppProvider({ children }) {
  const [username, setUsername] = useState("Vinay");
  const [theme, setTheme] = useState("light");

  const globalData = {
    username,
    setUsername,
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={globalData}>
      {children}
    </AppContext.Provider>
  );
}

// 3. Child Component
function Profile() {
  const { username, setUsername, theme, setTheme } =
    useContext(AppContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#f1f5f9" : "#1e293b",
        color: theme === "light" ? "#1e293b" : "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>Welcome, {username}!</h2>

      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Enter username"
      />

      <br /><br />

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Change Theme
      </button>

      <p>Current Theme: {theme}</p>
    </div>
  );
}

// 4. Main App Component
export default function GlobalApplication() {
  return (
    <AppProvider>
      <h1>Global Application Data</h1>
      <Profile />
    </AppProvider>
  );
}