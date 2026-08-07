import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import User from "./User";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";

function BrowserApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
<Route path="/user/:name" element={<User />} />
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <h1>Admin Page</h1>
    </ProtectedRoute>
  }
/>
<Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default BrowserApp;