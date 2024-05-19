import axios from "axios";

const baseAPI = axios.create({
    baseURL: "http://localhost:5000",
});


baseAPI.interceptors.request.use((req) => {


    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
  
    return req;
  });


export const getAllPost = () => baseAPI.get("/posts");
export const createNewPost = (newPostData) => baseAPI.post("/posts/create", newPostData);
export const updatePost = (id, updatePostData) => baseAPI.patch(`/posts/update/${id}`, updatePostData);
export const likePost = (id) => baseAPI.patch(`/posts/like/${id}`);
export const deletePost = (id) => baseAPI.delete(`/posts/delete/${id}`); 
export const getOnePostDetails = (id) => baseAPI.get(`/posts/post/${id}`);

export const signup = (newUserData) => baseAPI.post("/user/auth/signup", newUserData);
export const signin = (userData) => baseAPI.post("/user/auth/signin", userData);


export const getUserProfile = (id) => baseAPI.get(`/user/profile/${id}`);
export const savePost = (id) => baseAPI.patch(`user/profile/post/save/${id}`);
export const followUser = (id) => baseAPI.patch(`user/profile/follow/${id}`);