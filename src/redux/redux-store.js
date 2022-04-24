import { applyMiddleware, combineReducers, createStore } from "redux";
//reducer
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

//redux-more
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";


let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
  userPage: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
