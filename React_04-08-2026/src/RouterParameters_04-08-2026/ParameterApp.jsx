import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";

function ParameterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dynamic Route */}
        <Route path="/student/:id" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ParameterApp;