import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setUserData = (userID, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userID, email, login, isAuth },
});

//thunk

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((respons) => {
    if (respons.data.resultCode === 0) {
      let { id, email, login } = respons.data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((respons) => {
    if (respons.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      dispatch(stopSubmit("login", { _error: respons.data.messages[0] }));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((respons) => {
    if (respons.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export default authReducer;
