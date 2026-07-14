import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Profile() {

  const { theme } = useContext(ThemeContext);

  return <h2>Profile Page - {theme} Mode</h2>;
}

export default Profile;