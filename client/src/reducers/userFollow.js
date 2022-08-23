const userFollowReducer = (state = { userData: null }, action) => {

    switch (action.type) {
        case "FOLLOW_USER" : 
            return {... state, userData : action.payload}
        default:
            return state;
    }
}

export default userFollowReducer;