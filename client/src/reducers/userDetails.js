const userDetailsReducer = (state = { userData: null }, action) => {

    switch (action.type) {
        case "USER_PROFILE":
            return { ...state, userData: action?.payload };
        default:
            return state;
    }
}

export default userDetailsReducer;