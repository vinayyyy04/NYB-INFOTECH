import { useState } from "react";

function Patch() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handlePatch = async () => {
    try {
      setError("");

      const data = await patchData(1, {
        title: "Patched Title",
      });

      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>PATCH Request</h2>

      <button onClick={handlePatch}>Patch Post</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default Patch;