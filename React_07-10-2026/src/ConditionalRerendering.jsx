import { useState } from "react";

function ConditionalRerendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Welcome</h2>

      {isLoggedIn ? (
        <p>Welcome back! You are logged in.</p>
      ) : (
        <p>Please log in to continue.</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ConditionalRerendering;