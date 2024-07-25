import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

import "./index.css";

import { store } from "./store";
import { App } from "./App";
import { CssBaseline } from "@mui/material";
import "react-perfect-scrollbar/dist/css/styles.css";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <CssBaseline />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
