import {FETCH_ALL, DELETE, UPDATE, LIKE, CREATE } from '../constants/actionTypes'
import * as api from "../api/index";

// IF below fxn had been sync/didn't needed time to complete we must have used it as below:
/*
    const getPosts = ()=>{
        const action = {type: 'FETCH_ALL', payload: []};
        return action;
    }
*/
// otherwise
/*
    const getPosts = ()=> async (dispatch)=>{
        const action = {type: 'FETCH_ALL', payload: []};
        dispatch(action);
    }

*/
//  ActionCrators payload is set of data
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatedPost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
