import React from "react";
import { ContactData } from "./ContactData";
export const ProfileData = ({ profile, isOwner, activeEditMode }) => {
  return (
    <div>
      <div>Имя пользователя:{profile.fullName}</div>
      <div>
        Рабочий статус :{" "}
        {profile.lookingForAJob ? "в поиске" : "не ищет работу"}
      </div>
      <div>навыки : {profile.lookingForAJobDescription || 'null'}</div>
      <div>обо мне : {profile.aboutMe || "null"}</div>
      <div>
        Rонтакты:{" "}
        {Object.keys(profile.contacts).map((key) => (
          <ContactData key={key} title={key} value={profile.contacts[key]} />
        ))}
      </div>
      {isOwner && <button onClick={activeEditMode}>Редактировать</button>}
    </div>
  );
};
