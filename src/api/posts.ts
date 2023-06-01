export const getPostsApi = async () => {
    return await fetch('http://localhost:3000/posts')
}