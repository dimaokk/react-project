import { connect } from "react-redux";
import {
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  getUsersTc,
  followTc,
  unfollowTc,
} from "../../redux/user-reducer";
import React, { Component } from "react";
import Users from "./Users";
import { Preloader } from "../common/Preloader/Preloader";

class UsersAPI extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNum) => {
    this.props.getUsers(pageNum, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
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
            followDiasable={this.props.followDiasable}
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
    isFetching: state.userPage.isFetching,
    followDiasable: state.userPage.followDiasable,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID));
//     },
//     unfollow: (userID) => {
//       dispatch(unfollowAC(userID));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNum) => {
//       dispatch(setCurrentPageAC(pageNum));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     togleIsFetch: (isFetch) => {
//       dispatch(isFetchAC(isFetch));
//     },
//   };
// };

export default connect(mapStateToProps, {
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  getUsers: getUsersTc,
  follow: followTc,
  unfollow: unfollowTc,
})(UsersAPI);
