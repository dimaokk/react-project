import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (ComponentWrap) => {
  class RedirectComponent extends Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <ComponentWrap {...this.props} />;
    }
  }

  let ConnectRedirectComponent = connect(mapStateToPropsRedirect)(
    RedirectComponent
  );

  return ConnectRedirectComponent;
};
