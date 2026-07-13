import { useState } from "react";

function Delete() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      setError("");

      await deleteData(1);

      setMessage("Post deleted successfully.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>DELETE Request</h2>

      <button onClick={handleDelete}>Delete Post</button>

      {message && <p style={{ color: "green" }}>{message}</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Delete;