import { useState } from "react";

function Put() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handlePut = async () => {
    try {
      setError("");

      const data = await putData(1, {
        id: 1,
        title: "Updated Title",
        body: "Updated Body",
        userId: 1,
      });

      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>PUT Request</h2>

      <button onClick={handlePut}>Update Post</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default Put;