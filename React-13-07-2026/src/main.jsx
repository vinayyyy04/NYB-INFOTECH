import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"
import UserProvider from "./contextApi_13-07-2026/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
  </UserProvider>,
);
