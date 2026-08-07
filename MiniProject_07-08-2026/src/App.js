import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Product from "./Product";
import NotFound from "./NotFound";

import ProtectedRoute from "./ProtectedRoute";

function App() {

return (

<>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/contact" element={<Contact />} />

<Route path="/login" element={<Login />} />

<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
>

<Route path="profile" element={<Profile />} />

</Route>

<Route path="/product/:id" element={<Product />} />

<Route path="*" element={<NotFound />} />

</Routes>

</>

);

}

export default App;