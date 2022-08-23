import * as API from "../api/API.js";

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