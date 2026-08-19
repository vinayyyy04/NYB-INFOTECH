// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./Task_19-08-2026/Store";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";

// import App from "./App";
// import  store  from "./Statemanagment_19-08-2026/store";

// ReactDOM.createRoot(
//   document.getElementById("root")
// ).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );