import axios from "axios";

const BASE_URL = "https://sixtyseconds-backend.herokuapp.com/api";

export const login  = async (data) => {
  return await axios.post(BASE_URL + "/auth/login", data)
};

export const register  = async (data) => {
  return await axios.post(BASE_URL + "/auth/register", data)
};

export const getMyProfileFromApi = async (token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(BASE_URL + "/profile", config);
};

export const getProfileFromApi = async (id, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get(BASE_URL + "/profile/" + id, config);
};

export const getPostsFromAPi = async () => {
  return axios.get(BASE_URL + "/posts?skip=0&take=20");
};