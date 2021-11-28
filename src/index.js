import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost,subscribe  } from "./redux/state";
import state from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree)


reportWebVitals();
