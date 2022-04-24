import React from "react";
import styles from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogsItem";
import Massege from "./Message/Massege";

import { DialogReduxForm } from "./DialogsForm/DialogsForm";

const Dialogs = (props) => {
  let state = props.dialogs;

  let dialogElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageElements = state.messages.map((m) => (
    <Massege message={m.message} />
  ));

  const addMessage = (values) => {
    props.sendMessage(values.dialog);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__item}>{dialogElements}</div>
      <div className={styles.masseges}>
        <div>{messageElements}</div>
        <div>
          <DialogReduxForm onSubmit={addMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
