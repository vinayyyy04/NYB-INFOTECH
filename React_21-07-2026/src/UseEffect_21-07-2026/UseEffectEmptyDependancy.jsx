import { useEffect } from "react";

function UseEffectEmptyDependency() {

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div>
      <h2>useEffect with Empty Dependency Array</h2>

      <p>Open the console.</p>
    </div>
  );
}

export default UseEffectEmptyDependency;