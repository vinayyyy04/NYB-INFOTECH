import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
}

function Reducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </>
  );
}

export default Reducer;