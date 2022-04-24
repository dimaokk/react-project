/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Preloader } from "../../common/Preloader/Preloader";
import profileCss from "./Profile.module.css";
//import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import { ProfileStatusHook } from "./ProfileStatus/ProfileStatusHook";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          className={profileCss.img}
          src="https://img.freepik.com/free-photo/background-in-dark-colors-with-triangular-elements_183270-846.jpg?size=626&ext=jpg"
        />
      </div>
      <div className={profileCss.profile__info}>
        <div>
          <img
            className={profileCss.img_prof}
            src={props.profile.photos.large}
            alt="d"
          />
        </div>
        <ProfileStatusHook
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default Profile;
