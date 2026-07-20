import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

function Contextt(){

const theme = useContext(ThemeContext);

return <h1>{theme} Light Mode</h1>;

}

export default Contextt;