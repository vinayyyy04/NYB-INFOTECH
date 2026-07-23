import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function BankPortal() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">

      <h1>SBI Bank</h1>

      {
        isLoggedIn
          ? <Dashboard setIsLoggedIn={setIsLoggedIn}/>
          : <Login setIsLoggedIn={setIsLoggedIn}/>
      }

    </div>
  );
}

export default BankPortal;