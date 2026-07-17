import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ReduxToolkit from "./ReduxToolkit/ReduxToolkit";
import store from "./MiniProject/Store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App/>
  </Provider>
);