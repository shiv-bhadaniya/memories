const postReducer = (posts = [], action) => {
    switch (action.type) {
        case "GET_ALL_POST":
            return action.payload;    
        case "CREATE_NEW_POST":
            console.log(`I from create new post reducers this is posts ${posts} and this is action ${action} `);
            return [...posts, action.payload];
        default:
            return posts;
    }
}

export default postReducer;