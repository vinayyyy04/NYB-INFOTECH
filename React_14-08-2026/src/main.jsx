// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <App />
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// import App from "./App";
// import { ThemeProvider } from "./Task_14-08-2026/ThemeContext";

// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
