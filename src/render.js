import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { addMessage } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const renderDOM = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addMessage={addMessage} />
    </React.StrictMode>
  );
};
