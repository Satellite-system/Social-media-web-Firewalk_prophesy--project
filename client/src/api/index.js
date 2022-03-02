import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = ()=> axios.get(url);
export const createPosts = (newPost)=> axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatedPost = (id, updatedPost) => axios.patch(`${url}/${id}`,updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);