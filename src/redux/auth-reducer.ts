import { authAPI, secureAPI } from "../api/api";
//import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL";

export interface IInitializeState {
  userID: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: any;
}

let initialState: IInitializeState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action: any): IInitializeState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case GET_CAPTCHA_URL:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

//type
type SetUserDataPayloadType = {
  userID: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};

type SetUserDataType = {
  type: typeof SET_USER_DATA;
  payload: SetUserDataPayloadType;
};

type getCaptchaUrlSuccesType = {
  type: typeof GET_CAPTCHA_URL;
  payload: {
    captchaUrl: string | null;
  };
};

//action
export const setUserData = (
  userID: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  captchaUrl: string | null
): SetUserDataType => ({
  type: SET_USER_DATA,
  payload: { userID, email, login, isAuth, captchaUrl },
});

export const getCaptchaUrlSucces = (
  captchaUrl: string
): getCaptchaUrlSuccesType => ({
  type: GET_CAPTCHA_URL,
  payload: { captchaUrl },
});

//thunk
export const getAuthUserData = () => (dispatch: any) => {
  return authAPI.me().then((respons: any) => {
    if (respons.data.resultCode === 0) {
      let { id, email, login } = respons.data.data;
      dispatch(setUserData(id, email, login, true, null));
    }
  });
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any) =>
  (dispatch: any) => {
    authAPI.login(email, password, rememberMe, captcha).then((respons: any) => {
      if (respons.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        if (respons.data.resultCode === 10) {
          dispatch(getCaptchaUrl());
        }
        //dispatch(stopSubmit("login", { _error: respons.data.messages[0] }));
      }
    });
  };

export const getCaptchaUrl = () => async (dispatch: any) => {
  const respons = await secureAPI.getCaptcha();
  const url = respons.data.url;

  dispatch(getCaptchaUrlSucces(url));
};

export const logout = () => (dispatch: any) => {
  authAPI.logout().then((respons: any) => {
    if (respons.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false, null));
    }
  });
};

export default authReducer;
