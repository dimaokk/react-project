import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGLE_IS_FETCHING = "TOGLE_IS_FETCHING";
const TOGLE_FOLLOW_DISABLE = "TOGLE_FOLLOW_DISABLE";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followDiasable: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, follow: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, follow: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case TOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGLE_FOLLOW_DISABLE: {
      return {
        ...state,
        followDiasable: action.isFetching
          ? [...state.followDiasable, action.userId]
          : state.followDiasable.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

//action creater

export const followSucces = (userID) => ({ type: FOLLOW, userID });
export const unfollowSucces = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USER_COUNT,
  totalUsersCount,
});
export const TogleisFetching = (isFetching) => ({
  type: TOGLE_IS_FETCHING,
  isFetching,
});
export const togleDisable = (isFetching, userId) => ({
  type: TOGLE_FOLLOW_DISABLE,
  isFetching,
  userId,
});

//thunk

export const getUsersTc = (page, pageSize) => (dispatch) => {
  dispatch(TogleisFetching(true));
  dispatch(setCurrentPage(page));
  userAPI.getUsers(page, pageSize).then((data) => {
    dispatch(TogleisFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

export const followTc = (userID) => (dispatch) => {
  dispatch(togleDisable(true, userID));

  userAPI.follow(userID).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(followSucces(userID));
    }
    dispatch(togleDisable(false, userID));
  });
};

export const unfollowTc = (userID) => (dispatch) => {
  dispatch(togleDisable(true, userID));

  userAPI.follow(userID).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unfollowSucces(userID));
    }
    dispatch(togleDisable(false, userID));
  });
};

export default userReducer;
