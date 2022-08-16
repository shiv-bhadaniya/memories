import * as API from "../api/API.js";
import store from "../store.js";


export const getAllPost = () => async (dispatch) => {
    try {
        const { data } = await API.getAllPost();      
        dispatch({ type: "GET_ALL_POST", payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createNewPost = (newPostData) => async(dispatch) => {

    try {
        const { data } = await API.createNewPost(newPostData);
        console.log("API Called from action and get this data : ", data);
        dispatch({type: "CREATE_NEW_POST", payload: data});
    } catch (error) {
        console.log(error);
    }
}