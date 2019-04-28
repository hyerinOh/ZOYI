import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import Reducer from "./reducers/Reducer";
import { Provider } from "react-redux";

const store = createStore(Reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
