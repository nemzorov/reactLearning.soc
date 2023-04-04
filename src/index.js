import store from "./redux/state";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const renderDOM = () => {
  root.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        changeTextarea={store.changeTextarea.bind(store)}
        changeTextarea2={store.changeTextarea2.bind(store)}
        addMessage={store.addMessage.bind(store)}
        addPost={store.addPost.bind(store)}
      />
    </React.StrictMode>
  );
};

renderDOM(store.getState());
store.subscribe(renderDOM);
