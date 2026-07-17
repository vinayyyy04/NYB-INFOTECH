import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterSlice";

function ReduxToolkit() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </>
  );
}

export default ReduxToolkit;