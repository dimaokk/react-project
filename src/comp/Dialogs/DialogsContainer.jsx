import React from "react";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: () => {
      dispatch(updateNewMessageTextCreator());
    },
    sendMessage: (body) => {
      dispatch(sendMessageCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
