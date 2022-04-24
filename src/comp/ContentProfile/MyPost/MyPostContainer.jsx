import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPostst from "./MyPost";

let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPosts: (postBody) => {
      dispatch(addPostActionCreator(postBody));
    },
  };
};

const MyPoststContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPostst);

export default MyPoststContainer;
