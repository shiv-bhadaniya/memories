import * as API from "../api/API.js";

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
        dispatch({type: "CREATE_NEW_POST", payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, updatePostData) => async(dispatch) => {

    try {
        
        const { data } = await API.updatePost(id, updatePostData);
        dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async(dispatch) => {

    try {

        console.log("Before like calling : ");

        const { data } = await API.likePost(id);
        
        console.log("after like calling : ", data);


        dispatch( {type: "LIKE", payload: data});
    } catch (error) {
        console.log(error);
    }
}


export const deletePost = (id) => async(dispatch) => {

    try {
        
        await API.deletePost(id);
        dispatch( {type: "DELETE", payload: id});

    } catch (error) {
        console.log(error);
    }
}
