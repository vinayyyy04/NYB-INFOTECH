import { useState } from "react";

function ConditionalRendering() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1>Employee Portal</h1>

      {loggedIn ? (
        <>
          <h2>Welcome, Vinayy!</h2>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button onClick={() => setLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
}

export default ConditionalRendering;