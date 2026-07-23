import { useState } from "react";

import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import HRDashboard from "./HRDashboard";
import ManagerDashboard from "./ManagerDashboard";
import EmployeeDashboard from "./EmployeeDashboard";

function Company() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  // Authentication Check
  if (!isLoggedIn) {
    return (
      <Login
        setIsLoggedIn={setIsLoggedIn}
        setRole={setRole}
      />
    );
  }

// Role Based Rendering

  switch (role) {

    case "admin":
      return <AdminDashboard />;

    case "hr":
      return <HRDashboard />;

    case "manager":
      return <ManagerDashboard />;

    case "employee":
      return <EmployeeDashboard />;

    default:
      return <h2>Unauthorized User</h2>;
  }

}

export default Company;