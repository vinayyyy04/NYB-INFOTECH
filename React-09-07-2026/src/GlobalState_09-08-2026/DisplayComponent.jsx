import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function DisplayComponent() {
  const { count } = useContext(CounterContext);

  return <h2>Count: {count}</h2>;
}

export default DisplayComponent;