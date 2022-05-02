import React from "react";
import styles from "./ProfileDataForm.module.css";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
} from "../../../common/FormsControls/FormsControls";
import { ContactData } from "../ProfileData/ContactData";

function ProfileDataForm({ handleSubmit, profile }) {
  return (
    <form onSubmit={handleSubmit}>
      <button>сохранить</button>
      <div>
        Имя пользователя:
        {createField("Введите имя пользователя", "fullName", [], Input)}
      </div>
      <div>
        Рабочий статус :{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <div>
          навыки :{" "}
          {createField("Обо мне", "lookingForAJobDescription", [], Input)}{" "}
        </div>
      </div>
      <div>обо мне : {createField("Обо мне", "aboutMe", [], Input)}</div>
      <div>
        Rонтакты:
        {Object.keys(profile.contacts).map((key) => (
          <div className={styles.contacts}>
            {key}: {createField(key, `contacts.` + key, [], Input)}
          </div>
        ))}
      </div>
    </form>
  );
}

const ProfileDataFormRedux = reduxForm({ form: "editProfile" })(
  ProfileDataForm
);

export default ProfileDataFormRedux;
