import React, { useState } from "react";
import { Preloader } from "../../common/Preloader/Preloader";
import style from "./Profile.module.css";
import { ProfileStatusHook } from "./ProfileStatus/ProfileStatusHook";
import { ProfileData } from "./ProfileData/ProfileData";
import ProfileDataFormRedux from "./ProfileDataForm/ProfileDataForm";
import photo from "../../../assets/photo.jpeg";

const Profile = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const selectedPhoto = (e) => {
    if (e.target.files.length) {
      props.updatePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData);
    setEditMode(false);
  };

  return (
    <div>
      <div>
        <img
          alt="back"
          className={style.img}
          src="https://img.freepik.com/free-photo/background-in-dark-colors-with-triangular-elements_183270-846.jpg?size=626&ext=jpg"
        />
      </div>
      <div className={style.profile__info}>
        <div>
          <img
            className={style.img_prof}
            src={props.profile.photos.large || photo}
            alt="userphoto"
          />
          {props.isOwner && <input type="file" onChange={selectedPhoto} />}
          {editMode ? (
            <ProfileDataFormRedux
              initialValues={props.profile}
              onSubmit={onSubmit}
              profile={props.profile}
              deactiveEditMode={() => setEditMode(false)}
            />
          ) : (
            <ProfileData
              profile={props.profile}
              activeEditMode={() => setEditMode(true)}
              isOwner={props.isOwner}
            />
          )}
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
