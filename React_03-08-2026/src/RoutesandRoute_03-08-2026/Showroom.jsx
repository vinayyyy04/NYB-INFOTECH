import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import SUVs from "./SUV";
import Sedans from "./Sedans";
import Sports from "./Sports";

function Showroom() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suvs" element={<SUVs />} />
        <Route path="/sedans" element={<Sedans />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </>
  );
}

export default Showroom;