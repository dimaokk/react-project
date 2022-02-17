import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Massege from "./Message/Massege";

const Dialogs = (props) => {
  let state = props.dialogs;

  let dialogElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messageElements = state.messages.map((m) => (
    <Massege message={m.message} />
  ));

  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageText(body);
  };


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__item}>{dialogElements}</div>
      <div className={styles.masseges}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageText}
              placeholder="Enter message text"
              onChange={onNewMessageChange}
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dialogs;
