import { useReducer } from "react";
import { reducer, initialState } from "./Reducer";

function Counterr() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default Counterr;