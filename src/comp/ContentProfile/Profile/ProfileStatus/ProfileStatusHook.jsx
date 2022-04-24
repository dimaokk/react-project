import React, { useState, useEffect } from "react";
import styles from "./ProfileStatus.module.css";

export const ProfileStatusHook = (props) => {
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
    console.log('res')
  }, [props.status]);

  const activeteEdit = () => {
    setEdit(true);
  };
  const deactivateEditMode = () => {
    setEdit(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!edit ? (
        <span onClick={activeteEdit}>
          {props.status || "Установить статус"}
        </span>
      ) : (
        <input
          onChange={onStatusChange}
          value={status}
          type="text"
          autoFocus={true}
          onBlur={deactivateEditMode}
          className={styles.input}
        />
      )}
    </div>
  );
};
