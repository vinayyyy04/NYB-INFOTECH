import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const registered =
    localStorage.getItem("registered");

  if (registered !== "true") {
    return <Navigate to="/register" />;
  }

  return children;
}

export default ProtectedRoute;