import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Menu from "./Menu";
import DishDetails from "./DishDetails";
import Login from "./Login";
import Admin from "./Admin";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";

function IntiRuchulu() {

   const isLoggedIn = true;

  return (

    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />

<Route path="/menu/:id" element={<DishDetails />} />

<Route path="/login" element={<Login />} />

<Route
  path="/admin"
  element={
    <ProtectedRoute isLoggedIn={isLoggedIn}>
      <Admin />
    </ProtectedRoute>
  }
/>

<Route path="*" element={<NotFound />} />

      </Routes>

    </>

  );

}

export default IntiRuchulu; 