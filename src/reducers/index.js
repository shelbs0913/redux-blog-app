export const blogPostReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_BLOG_POST":
            return [...state,
                {
                    subject: action.payload.subject, 
                    post: action.payload.post,
                    favorite: action.payload.favorite
                }
            ]
        default:
            return state;
    }
}