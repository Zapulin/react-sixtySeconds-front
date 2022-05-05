import axios from "axios";

const gitHubUrl = "https://api.github.com/users/deekshasharma";

const profileUrl = "https://api.github.com/users/";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

export const getProfileFromApi = async (id) => {
    return axios.get(profileUrl+id);
};

export const getPostFromAPi = async () => {
    return axios.get(postsUrl);
};