import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Home() {

  const { theme } = useContext(ThemeContext);

  return <h2>Home Page - {theme} Mode</h2>;
}

export default Home;