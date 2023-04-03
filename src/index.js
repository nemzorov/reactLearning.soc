import state, { subscribe } from "./redux/state";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  addMessage,
  changeTextarea,
  addPost,
  changeTextarea2,
} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const renderDOM = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        changeTextarea={changeTextarea}
        changeTextarea2={changeTextarea2}
        addMessage={addMessage}
        addPost={addPost}
      />
    </React.StrictMode>
  );
};

renderDOM(state);
subscribe(renderDOM);
