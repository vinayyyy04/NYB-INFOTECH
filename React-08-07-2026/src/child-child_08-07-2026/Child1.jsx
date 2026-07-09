function Child1({ sendMessage }) {
  return (
    <>
      <h2>Child 1</h2>

      <button onClick={() => sendMessage("Hello from Child 1!")}>
        Send to Child 2
      </button>
    </>
  );
}

export default Child1;