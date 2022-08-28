const getOnePostDetailsReducer = (posts = [], action) => {

    switch (action.type) {
        case "GET_ONE_POST" :
            return action.payload;
        default:
            return posts;
    }
}

export default getOnePostDetailsReducer;