import { useState } from "react";

function ErrorHandling() {
  const [error, setError] = useState("");

  const getData = () => {
    fetch("https://wrong-api-url.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      {error && <p>{error}</p>}
    </div>
  );
}

export default ErrorHandling;