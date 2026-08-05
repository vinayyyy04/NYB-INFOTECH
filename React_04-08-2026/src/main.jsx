import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import IntiRuchulu from "./MiniProject_04-08-2026/IntiRuchulu";
// import "./index.css";
// import "./App.css"
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <IntiRuchulu/>
//   </BrowserRouter>
// );