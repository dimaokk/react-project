/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import contClass from './Content.module.css';

import MyPoststContainer from "./MyPost/MyPostContainer";
import Profile from "./Profile/Profile";

const Content = (props) => {
  return (
    <div>
      <Profile
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus} 
        updatePhoto={props.updatePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPoststContainer />
    </div>
  );
};

export default Content;
