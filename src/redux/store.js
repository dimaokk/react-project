import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profile: {
            posts: [
                { id: 1, message: "hellow world!", like: 45325 },
                { id: 2, message: "hi", like: 5245 },
                { id: 3, message: "didi", like: 3232 },
            ],
            newPostText: "it dimka",
        },

        dialogs: {
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
        },
        
        sidebar: {

        }
    },
    _callSubscriber() {
        console.log("state ismenen");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    },
};



export default store;
window.store = store;
