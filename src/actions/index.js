export const addBlogPost = (blogObject) => {
    return {
        type: 'ADD_BLOG_POST',
        payload: blogObject
    }
}
