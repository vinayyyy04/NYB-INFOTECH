import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Navbar() {

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <h2>Current Theme : {theme}</h2>

      <button onClick={() => setTheme("Dark")}>
        Dark Mode
      </button>
      <br></br>
      <br></br>

      <button onClick={() => setTheme("Light")}>
        Light Mode
      </button>
    </>
  );
}

export default Navbar;