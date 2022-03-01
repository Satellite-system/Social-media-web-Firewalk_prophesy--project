import * as api from '../api';


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
export const getPosts = ()=> async (dispatch)=>{
    
    try {
        const {data} = await api.fetchPosts();
       
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) =>{
    try {
        const {data} = await api.createPosts(post);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}