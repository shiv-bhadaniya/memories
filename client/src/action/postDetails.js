import * as API from "../api/API.js";

export const getOnePostDetails = (id) => async(dispatch) => {

    try {
        
        const { data } = await API.getOnePostDetails(id);

        dispatch({type: "GET_ONE_POST", payload: data});
    } catch (error) {
        console.log(error);
    }
}
