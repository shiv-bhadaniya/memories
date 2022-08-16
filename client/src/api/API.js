import axios from "axios";

const baseAPI = axios.create({
    baseURL: "http://localhost:5000",
});

export const getAllPost = () => baseAPI.get("/posts");
export const createNewPost = (newPostData) => baseAPI.post("/posts/create", newPostData);