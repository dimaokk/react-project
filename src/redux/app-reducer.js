import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

//ac
export const setInitializedSucces = () => ({ type: SET_INITIALIZED });

//tc

export const initialize = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(setInitializedSucces());
  });
};


export default appReducer;
