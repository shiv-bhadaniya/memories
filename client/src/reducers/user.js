const userReducer = (state = { userData: null }, action) => {

    switch (action.type) {
        case "SAVE_POST":
            console.log("Save post Reducer");
            return { ...state, userData: action.payload }
        case "FOLLOW_USER":
            return { ...state, userData: action.payload }
        default:
            return state;
    }
}

export default userReducer;