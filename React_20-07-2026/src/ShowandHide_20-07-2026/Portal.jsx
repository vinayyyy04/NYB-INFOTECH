import { useState } from "react";
import Login from "./Login";
import DashBoard from "./DashBoard";

function Portal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <h1>Employee Login </h1>

      {isLoggedIn ? (
        <DashBoard setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default Portal;