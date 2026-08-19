import { useRef } from "react";

function UncontrolledComponent() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${nameRef.current.value}`);
  };

  return (
    <div>
      <h2>Uncontrolled Component</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={nameRef}
          placeholder="Enter your name"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledComponent;