const postReducer = (posts = [], action) => {
    switch (action.type) {
        case "GET_ALL_POST":
            return action.payload;    
        case "CREATE_NEW_POST":
            return [...posts, action.payload];
        case "UPDATE" : 
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case "LIKE" :
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case "DELETE" :
            return posts.filter((post) => (post._id !== action.payload._id));
        default:
            return posts;
    }
}

export default postReducer;