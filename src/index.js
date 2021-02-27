import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import App from "./App";
import { HashRouter, Route } from "react-router-dom";
ReactDOM.render(
  <HashRouter>
    <Route path="/app" render={() => <App />} />
    <Route path="/login" render={() => <LoginPage />} />
  </HashRouter>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
