const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "hellow world" },
    { id: 1, message: "hi" },
    { id: 1, message: "new massfew" },
  ],
  dialogs: [
    { id: 1, name: "Sashula" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Lesha" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
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

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
