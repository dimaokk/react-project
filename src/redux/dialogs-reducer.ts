const SEND_MESSAGE = "SEND-MESSAGE";

type MessagesType = {
  id: number;
  message: string;
};
type DialogsType = {
  id: number;
  name: string;
};
let initialState = {
  messages: [
    { id: 1, message: "hellow world" },
    { id: 1, message: "hi" },
    { id: 1, message: "new massfew" },
  ] as Array<MessagesType>,
  dialogs: [
    { id: 1, name: "Sashula" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Lesha" },
  ] as Array<DialogsType>,
};
export type TnitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any
): TnitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

//type of action
type SendMessageCreatorType ={
  type: typeof SEND_MESSAGE,
  newMessageBody: string,
}
//action
export const sendMessageCreator = (newMessageBody: string):SendMessageCreatorType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
