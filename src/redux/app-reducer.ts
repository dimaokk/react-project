import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

interface IInitializeState {
  initialized: boolean;
}

let initialState: IInitializeState = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): IInitializeState => {
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

//type
type setInitializedSuccesType = {
  type: typeof SET_INITIALIZED;
};

//ac
export const setInitializedSucces = (): setInitializedSuccesType => ({
  type: SET_INITIALIZED,
});

//tc

export const initialize = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(setInitializedSucces());
  });
};

export default appReducer;
