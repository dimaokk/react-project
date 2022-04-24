import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./comp/Header/HeaderContainer";
import Navbar from "./comp/Navbar/Navbar";
import DialogsContainer from "./comp/Dialogs/DialogsContainer";
import UsersContainer from "./comp/Users/UsersContainer";

import ContentContainer from "./comp/ContentProfile/ContentContainer";
import LoginContainer from "./comp/Login/LoginContainer";

import { initialize } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { Preloader } from "./comp/common/Preloader/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
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
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize })
)(App);
