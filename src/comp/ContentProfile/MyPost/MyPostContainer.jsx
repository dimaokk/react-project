import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPostst from "./MyPost";

let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPosts: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPoststContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostst);

export default MyPoststContainer;
