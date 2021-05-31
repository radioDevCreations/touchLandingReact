import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './reset.scss';
import App from "./App";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
