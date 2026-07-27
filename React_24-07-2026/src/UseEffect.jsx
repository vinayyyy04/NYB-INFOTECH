import { useEffect } from "react";

function UseEffect() {
  useEffect(() => {
    console.log("Fetching today's weather...");
  }, []);

  return (
    <div>
      <h1>Weather Dashboard</h1>
    </div>
  );
}

export default UseEffect;