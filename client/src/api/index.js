import axios from 'axios'

const API_URL = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/+$/, '')

const url = `${API_URL}/posts`

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const createOrGetUser = async (response) => {
    console.log(response.credential)
}