export const getUsers = (state) => {
  return state.userPage.users;
};

export const getPageSize = (state) => {
  return state.userPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.userPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.userPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.userPage.isFetching;
};

export const getFollowDiasable = (state) => {
  return state.userPage.followDiasable;
};
