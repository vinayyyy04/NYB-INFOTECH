import { useState, useCallback, lazy, Suspense } from "react";

import UserCard from "./UserCard";
import ExpensiveCalculation from "./ExpensiveCalculation";

const Settings = lazy(() => import("./Settings"));

function TaskApp() {
  const [count, setCount] = useState(0);

  const [number, setNumber] = useState(1);

  const [showSettings, setShowSettings] = useState(false);

  console.log("App rendered");

  // useCallback prevents this function
  // from being recreated on every render
  const handleSelectUser = useCallback(() => {
    alert("User Selected!");
  }, []);

  return (
    <div className="app">
      
      <header>
        <div>
          <h1>React Performance Dashboard</h1>
          <p>Understand unnecessary re-renders</p>
        </div>

        <button
          className="counter-btn"
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
      </header>

      <main>

        {/* React.memo + useCallback */}
        <section>
          <h2>👤 User Component</h2>

          <p className="description">
            Click the counter. Check the console.
            The UserCard will not unnecessarily re-render.
          </p>

          <UserCard
            name="Vinay"
            onSelect={handleSelectUser}
          />
        </section>


        {/* useMemo */}
        <section>
          <h2>⚡ Expensive Calculation</h2>

          <p className="description">
            The calculation only runs when the number changes.
          </p>

          <button
            className="number-btn"
            onClick={() => setNumber(number + 1)}
          >
            Change Number: {number}
          </button>

          <ExpensiveCalculation number={number} />
        </section>


        {/* Lazy Loading + Code Splitting */}
        <section>
          <h2>🚀 Lazy Loading & Code Splitting</h2>

          <p className="description">
            Settings component is loaded only when required.
          </p>

          <button
            className="settings-btn"
            onClick={() => setShowSettings(!showSettings)}
          >
            {showSettings
              ? "Hide Settings"
              : "Load Settings"}
          </button>

          {showSettings && (
            <Suspense
              fallback={
                <div className="loading">
                  Loading Settings...
                </div>
              }
            >
              <Settings />
            </Suspense>
          )}

        </section>

      </main>
    </div>
  );
}

export default TaskApp;
