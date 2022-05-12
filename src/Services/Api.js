import axios from "axios";

const realProfileUrlFromGithub = "https://api.github.com/users/deekshasharma";
const profileUrl = "https://api.github.com/users/";


/* HEROUKUU SIXTYSECONDS */
const getPostsUrl = "https://sixtyseconds-backend.herokuapp.com/api/posts"
const createPostUrl = "https://sixtyseconds-backend.herokuapp.com/api/post/create";
const getProfileUrl = "https://sixtyseconds-backend.herokuapp.com/api/profile/6"


export const getProfileFromApiGithub = async (id) => {
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
        'Authorization': 'Bearer 1|UZ7MUB9ooSbWvPg6IthTZYET4lL1LopVtBQC14eo'
      }})
    .then(res=>{
      console.log(res.data)
    })
}

export const getProfileFromApi = async () => {
    return axios.get(getProfileUrl, {headers: {
        'Authorization': 'Bearer 1|UZ7MUB9ooSbWvPg6IthTZYET4lL1LopVtBQC14eo'
     }}).then(res=>{
         console.log(res.data)
     });
}





