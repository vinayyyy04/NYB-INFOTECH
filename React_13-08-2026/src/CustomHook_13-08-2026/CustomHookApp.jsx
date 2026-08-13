import useCounter from "./UseCounter";

function CustomHookApp() {
  const { count, increase, decrease } = useCounter();

  return (
    <div>
      <h1>Counter--CustomHook</h1>

      <h2>{count}</h2>

      <button onClick={increase}>
        +
      </button>

      <button onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default CustomHookApp;