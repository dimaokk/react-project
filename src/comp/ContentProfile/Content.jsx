/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import contClass from './Content.module.css';

import MyPoststContainer from "./MyPost/MyPostContainer";
import Profile from "./Profile/Profile";

const Content = (props) => {
    return (
        <div>
            <Profile />
            <MyPoststContainer
                store={props.store}
                
            />
        </div>
    );
};

export default Content;
