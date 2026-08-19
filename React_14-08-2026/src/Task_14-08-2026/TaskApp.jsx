import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

import Home from "./Home";
import Events from "./Events";
import EventDetails from "./EventDetails";
import Register from "./Register";
import MyRegistrations from "./MyRegistrations";

import { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));

function TaskApp() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/events" element={<Events />} />

          {/* Dynamic Route */}
          <Route
            path="/events/:id"
            element={<EventDetails />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          {/* Protected Route */}
          <Route
            path="/my-registrations"
            element={
              <ProtectedRoute>
                <MyRegistrations />
              </ProtectedRoute>
            }
          />

          {/* Lazy Loaded Page */}
          <Route
            path="/about"
            element={
              <Suspense fallback={<h2>Loading page...</h2>}>
                <About />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={<h1>404 - Page Not Found</h1>}
          />
        </Routes>
      </main>
    </>
  );
}

export default TaskApp;