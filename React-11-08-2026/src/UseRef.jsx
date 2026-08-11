import { useRef } from "react";

function UseRef() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter your name" />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default UseRef;