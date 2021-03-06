import React, { Component } from "react";
import { connect } from "react-redux";
import { Login } from "./Login";
import { login, logout } from "../../redux/auth-reducer";

export class LoginContainer extends Component {
  render() {
    return (
      <Login
        isAuth={this.props.isAuth}
        login={this.props.login}
        logout={this.props.logout}
        captchaUrl={this.props.captchaUrl}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login, logout })(LoginContainer);
