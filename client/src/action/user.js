import * as API from "../api/API.js";

export const getUserProfile = (id) => async(dispatch) => {

    try {
        const { data } = await API.getUserProfile(id);
        dispatch({type: "USER_PROFILE", payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const savePost = (id) => async(dispatch) => {

    try {
        
        console.log("Before Save called ");
        const { data } = await API.savePost(id);
        console.log("After save called", data);
        dispatch({type: "SAVE_POST", payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const followUser = (id) => async (dispatch) => {

    try {
        
        console.log("Before follow called");
        const { data } = await API.followUser(id);
        console.log("After follow called", data);
        dispatch({type: "FOLLOW_USER", payload: data});

    } catch (error) {
        console.log(error);
    }
}