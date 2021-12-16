const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    
        messages: [
            { id: 1, message: "hellow world" },
            { id: 1, message: "hi" },
            { id: 1, message: "07949299294" },
        ],
        dialogs: [
            { id: 1, name: "Sashula" },
            { id: 2, name: "Dima" },
            { id: 3, name: "Lesha" },
        ],
        newMessageText: "",
    
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageText;

            state.newMessageText = "";
            state.messages.push({ id: 6, message: body });
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    body: body,
});

export default dialogsReducer;
