import React, { lazy, Suspense, useState } from "react";
import Home from "./Home";

// Lazy Loaded Components

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

function WebpageApp() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav className="navbar">
        <h2>React Website</h2>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("about")}>About</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>
      </nav>

      <div className="content">
        {page === "home" && <Home />}

        <Suspense fallback={<h2 className="loading">Loading Page...</h2>}>
          {page === "about" && <About />}
          {page === "contact" && <Contact />}
        </Suspense>
      </div>
    </div>
  );
}

export default WebpageApp;