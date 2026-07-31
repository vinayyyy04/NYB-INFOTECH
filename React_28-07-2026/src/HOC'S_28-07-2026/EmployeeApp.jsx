import Dashboard from "./Dashboard";
import EmployeeDetails from "./EmployeeDetails";

import withAuthentication from "./WithAuthentication";
import withLoading from "./WithLoading";

// Wrap Components
const ProtectedDashboard = withAuthentication(Dashboard);
const ProtectedEmployeeDetails = withLoading(EmployeeDetails);

function EmployeeApp() {
  return (
    <>
      <h1>Reusable Higher-Order Components</h1>

      <ProtectedDashboard />

      <hr />

      <ProtectedEmployeeDetails />
    </>
  );
}

export default EmployeeApp;