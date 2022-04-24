import { profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "hellow world!", like: 45325 },
    { id: 2, message: "hi", like: 5245 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.postBody,
        like: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case UPDATE_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

//action creater

export const addPostActionCreator = (postBody) => ({
  type: ADD_POST,
  postBody,
});
const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

//thunk

export const getProfileTc = (userID) => (dispatch) => {
  profileAPI.getProfile(userID).then((respons) => {
    dispatch(setUserProfile(respons.data));
  });
};

export const getStatus = (userID) => (dispatch) => {
  profileAPI.getStatus(userID).then((respons) => {
    dispatch(setStatus(respons.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((respons) => {
    if (respons.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
