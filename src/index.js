import store from "./redux/store-redux";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreContext from "./store-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const renderDOM = () => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

renderDOM(store.getState());
store.subscribe(renderDOM);
