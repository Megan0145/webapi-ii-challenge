import * as types from './actionTypes';
import axios from 'axios';

export const getPosts = () => dispatch => {
    axios.get("http://localhost:5000/api/posts")
    .then(res => {
        console.log(res.data)
        dispatch({
            type: types.GET_ALL_POSTS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const deletePost = (id) => dispatch => {
    axios.delete(`http://localhost:5000/api/posts/${id}`)
    .then(res => {
       dispatch({
           type: types.DELETE_POST,
           payload: res.data.id
       })
    })
    .catch(err => {
        console.log(err)
    })
}