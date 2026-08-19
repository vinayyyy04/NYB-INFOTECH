import { Routes, Route } from "react-router-dom";
import Product from "./Product";

function DynamicRouteApp() {
  return (
    <Routes>
      <Route
        path="/product/:id"
        element={<Product />}
      />
    </Routes>
  );
}

export default DynamicRouteApp;


let {id} = 


fetch =("url/25")