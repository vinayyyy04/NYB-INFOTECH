import { useState } from "react";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./Profile";

function Application() {

  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Home />
      <Profile />
    </ThemeContext.Provider>
  );
}

export default Application;