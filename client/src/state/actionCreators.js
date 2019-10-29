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