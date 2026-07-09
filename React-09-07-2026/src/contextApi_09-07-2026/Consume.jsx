import { useContext } from "react";
import UserContext from "./CreateContext";

function Consume() {
  const name = useContext(UserContext);

  return <h2>Hello, {name}</h2>;
}

export default Consume;