import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "e7cbc77a-ac77-4c35-86a1-8ab289d056c4",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(userID) {
    return instance.post(`follow/${userID}`);
  },

  unfollow(userID) {
    return instance.delete(`follow/${userID}`);
  },
  getProfile(userID) {
    console.warn("use profileAPI method");
    return profileAPI.getProfile(userID);
  },
};

export const profileAPI = {
  getProfile(userID) {
    return instance.get(`profile/` + userID);
  },
  getStatus(userID) {
    return instance.get(`profile/status/` + userID);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  updateProfilePhoto(file) {
    const formData = new FormData();
    formData.append("image", file);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },

  login(login, password, rememberMe, captcha = null) {
    return instance.post(`/auth/login`, {
      email: login,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha,
    });
  },

  logout() {
    return instance.delete(`/auth/login`);
  },

  secureCaptcha() {
    return instance.get(``);
  },
};

export const secureAPI = {
  getCaptcha() {
    return instance.get(`security/get-captcha-url`);
  },
};
