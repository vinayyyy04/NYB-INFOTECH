import { useState } from "react";
import Dashboard from "./Dashboard";
import withAuth from "./withAuth";

const ProtectedDashboard = withAuth(Dashboard);

function EmployeeLoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <ProtectedDashboard
      isLoggedIn={isLoggedIn}
      onLogin={login}
    />
  );
}

export default EmployeeLoginForm;