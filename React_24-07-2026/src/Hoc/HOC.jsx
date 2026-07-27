import { useState } from "react";
import Dashboard from "./Dashboard";
import withAuthentication from "./WithAuth";

const ProtectedDashboard = withAuthentication(Dashboard);

function HOC() {

  const [login, setLogin] = useState(false);

  return (
    <div>

      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>

      <ProtectedDashboard isLoggedIn={login} />

    </div>
  );
}

export default HOC;