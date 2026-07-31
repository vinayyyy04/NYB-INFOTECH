import React, { useState, lazy, Suspense } from "react";
import Home from "./Home";

// Lazy Loading
const Dashboard = lazy(() => import("./Dashboard"));

function LazyLoading() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>React Lazy Loading Example</h1>

      <Home />

      <br />

      <button onClick={() => setShowDashboard(true)}>
        Open Dashboard
      </button>

      <br />
      <br />

      {showDashboard && (
        <Suspense fallback={<h2>Loading Dashboard...</h2>}>
          <Dashboard />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoading;