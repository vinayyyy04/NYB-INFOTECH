import React from "react";

function Child({ onClick }) {
  console.log("Child Rendered");

  return (
    <button onClick={onClick}>
      Click Me
    </button>
  );
}

export default React.memo(Child);