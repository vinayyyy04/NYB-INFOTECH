import { lazy, Suspense, useState } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function LazyLoadingApp() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div>
      <h1>My Website--LazyLoading</h1>

      <button onClick={() => setShowDashboard(true)}>
        Open Dashboard
      </button>

      {showDashboard && (
        <Suspense fallback={<h2>Loading Dashboard...</h2>}>
          <Dashboard />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoadingApp;