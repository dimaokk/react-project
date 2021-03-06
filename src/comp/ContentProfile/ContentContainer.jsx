import React, { Component } from "react";

import { connect } from "react-redux";
import Content from "./Content";
import {
  getProfileTc,
  getStatus,
  updateStatus,
  updatePhoto,
  saveProfile,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ContentContainer extends Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.loginUserId;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate() {
    this.refreshProfile();
  }

  render() {
    return (
      <Content
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        updatePhoto={this.props.updatePhoto}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    loginUserId: state.auth.userID,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfile: getProfileTc,
    getStatus,
    updateStatus,
    updatePhoto,
    saveProfile,
  }),
  withRouter,
  withAuthRedirect
)(ContentContainer);
