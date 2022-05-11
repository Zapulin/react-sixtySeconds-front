import axios from "axios";

const realProfileUrlFromGithub = "https://api.github.com/users/deekshasharma";

const profileUrl = "https://api.github.com/users/";

const getPostsUrl = "https://sixtyseconds-backend.herokuapp.com/api/posts"

const createPostUrl = "https://sixtyseconds-backend.herokuapp.com/api/post/create";


export const getProfileFromApi = async (id) => {
    return axios.get(profileUrl + id);
};

export const getPostsFromAPi = async () => {
    return axios.get(getPostsUrl);
};

export const publishPostToBackend = async (data) => {
    axios.post(createPostUrl, data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      }})
    .then(res=>{
      console.log(res.data)
    })
}






