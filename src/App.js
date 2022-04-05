import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./comp/Header/HeaderContainer";
import Navbar from "./comp/Navbar/Navbar";
import DialogsContainer from "./comp/Dialogs/DialogsContainer";
import UsersContainer from "./comp/Users/UsersContainer";

import ContentContainer from "./comp/ContentProfile/ContentContainer";
import LoginContainer from "./comp/Login/LoginContainer";

const App = (props) => {
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app_wrapper_cont">
        <Route path="/profile/:userId?" render={() => <ContentContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <LoginContainer />} />
      </div>
    </div>
  );
};

export default App;
