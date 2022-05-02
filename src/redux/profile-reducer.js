import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const UPDATE_PHOTO_SUCCES = "UPDATE_PHOTO_SUCCES";

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

    case UPDATE_PHOTO_SUCCES: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        },
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
const updatePhotoSucces = (photos) => ({
  type: UPDATE_PHOTO_SUCCES,
  photos,
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

export const updatePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.updateProfilePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(updatePhotoSucces(response.data.data.photos));
    debugger;
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userID = getState().auth.userID;
  let respons = await profileAPI.saveProfile(profile);

  if (respons.data.resultCode === 0) {
    dispatch(getProfileTc(userID));
  }
};

export default profileReducer;
