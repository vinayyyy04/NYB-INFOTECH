import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function CarShowroom() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      {login ? (
        <Dashboard />
      ) : (
        <Login onLogin={() => setLogin(true)} />
      )}
    </div>
  );
}

export default CarShowroom;