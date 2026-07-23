import { useEffect, useState } from "react";

function UseEffectCleanup() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Cleanup Function Example</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Timer" : "Show Timer"}
      </button>

      {show && <Timer />}
    </div>
  );
}

function Timer() {
  useEffect(() => {
    console.log("Timer Started");

    const interval = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Cleanup Executed");
    };
  }, []);

  return <h3>Timer is Running...</h3>;
}

export default UseEffectCleanup;