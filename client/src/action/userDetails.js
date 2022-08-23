import * as API from "../api/API.js";

export const getUserProfile = (id) => async(dispatch) => {

    try {
        const { data } = await API.getUserProfile(id);
        dispatch({type: "USER_PROFILE", payload: data});
    } catch (error) {
        console.log(error);
    }
}