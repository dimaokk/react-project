import React from "react";
import {
    sendMessageCreator,
    updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogs

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextCreator(body));
    };

    return (
        <Dialogs
            sendMessage={onSendMessageClick}
            updateNewMessageText={onNewMessageChange}
            dialogs={state}
        />
    );
};

export default DialogsContainer;
