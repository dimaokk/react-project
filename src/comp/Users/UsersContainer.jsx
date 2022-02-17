import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  isFetchAC,
} from "../../redux/user-reducer";
import React, { Component } from "react";
import * as axios from "axios";
import Users from "./Users";
import { Preloader } from "../common/Preloader/Preloader";

class UsersAPI extends Component {
  componentDidMount() {
    this.props.togleIsFetch(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((respons) => {
        this.props.togleIsFetch(false)
        this.props.setUsers(respons.data.items);
        this.props.setTotalUsersCount(respons.data.totalCount);
      });
  }

  onPageChange = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    this.props.togleIsFetch(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`
      )
      .then((respons) => {
        this.props.togleIsFetch(false)
        this.props.setUsers(respons.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetch ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetch: state.userPage.isFetch,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNum) => {
      dispatch(setCurrentPageAC(pageNum));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    togleIsFetch: (isFetch) => {
      dispatch(isFetchAC(isFetch));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
