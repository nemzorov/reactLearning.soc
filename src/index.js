import store from "./redux/state";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const renderDOM = () => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispath={store.dispath.bind(store)} />
    </React.StrictMode>
  );
};

renderDOM(store.getState());
store.subscribe(renderDOM);
