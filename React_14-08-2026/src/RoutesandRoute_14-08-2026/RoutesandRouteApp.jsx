import { Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function RoutesandRouteApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesandRouteApp;