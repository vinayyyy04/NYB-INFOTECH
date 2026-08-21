import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

import Home from "./Home";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import Login from "./Login";
import NotFound from "./NotFound";

const Favorites = lazy(() =>
  import("./Favorites")
);

function TaskApp1() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/movies"
            element={<Movies />}
          />

          {/* Dynamic Route */}
          <Route
            path="/movies/:id"
            element={<MovieDetails />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          {/* Protected + Lazy Loaded Route */}
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </Suspense>
    </>
  );
}

export default TaskApp1;