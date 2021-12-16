import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./comp/Header/Header";
import Navbar from "./comp/Navbar/Navbar";
import Content from "./comp/ContentProfile/Content";
import DialogsContainer from "./comp/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className="app_wrapper">
            <Header />
            <Navbar />
            <div className="app_wrapper_cont">
                <Route
                    path="/profile"
                    render={() => <Content store={props.store} />}
                />
                <Route
                    path="/dialogs"
                    render={() => <DialogsContainer store={props.store} />}
                />
            </div>
        </div>
    );
};

export default App;
