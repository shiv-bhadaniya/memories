import * as API from "../api/API";

export const signup = (newUserData, navigate) => async(dispatch) => {

    try {
        const { data } = await API.signup(newUserData);
        dispatch( {type: "AUTH", data} );
        navigate("/")
    } catch (error) {
        console.log(error);
    }
}

export const signin = (userData, navigate) => async (dispatch) => {

    try {
        const { data } = await API.signin(userData);
        dispatch( {type: "AUTH", data} );
        navigate("/")
    } catch (error) {
        console.log(error);
    }

}