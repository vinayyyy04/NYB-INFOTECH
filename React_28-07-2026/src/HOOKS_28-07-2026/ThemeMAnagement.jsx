import { useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return { theme, toggleTheme };
}

function ThemeManagement() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "Light" ? "white" : "black",
        color: theme === "Light" ? "black" : "white",
        padding: "20px",
      }}
    >
      <h2>{theme} Theme</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeManagement;