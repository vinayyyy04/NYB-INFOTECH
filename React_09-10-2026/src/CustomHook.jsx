import useCounter from "./UseCounter";

function CounterOne() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Counter One: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function CounterTwo() {
  const { count, increment } = useCounter();

  return (
    <div>
      <h2>Counter Two: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default function CustomHook() {
  return (
    <div>
      <h1>Reusable Custom Hook</h1>
      <CounterOne />
      <CounterTwo />
    </div>
  );
}