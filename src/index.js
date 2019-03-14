import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { HashRouter } from "react-router-dom";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
