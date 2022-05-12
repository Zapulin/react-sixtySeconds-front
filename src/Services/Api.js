import axios from "axios";

const gitHubUrl = "https://api.github.com/users/deekshasharma";

const profileUrl = "https://api.github.com/users/";

const postsHerouku = "https://sixtyseconds-backend.herokuapp.com/api/posts?skip=0&take=20"

export const getProfileFromApi = async (id) => {
    return axios.get(profileUrl + id);
};

export const register = async (id) => {
    
};

export const getPostsFromAPi = async () => {
    return axios.get(postsHerouku);
};