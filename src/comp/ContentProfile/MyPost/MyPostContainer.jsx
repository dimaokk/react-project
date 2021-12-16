import React from "react";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPostst from "./MyPost";

const MyPoststContainer = (props) => {
    let state = props.store.getState();

    let addPosts = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPostst
            updateNewPostText={onPostChange}
            addPosts={addPosts}
            posts={state.profile.posts}
            newPostText={state.profile.newPostText}
        />
    );
};

export default MyPoststContainer;
