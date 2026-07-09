function StudentDetails({ sendMessage }) {
  return (
    <>
      <h1>Child Component</h1>

      <button onClick={() => sendMessage("Hello Parent!")}>
        Send Data
      </button>
    </>
  );
}

export default StudentDetails;