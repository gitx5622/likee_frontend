import {SEARCH_POSTS, FETCH_POSTS,FETCH_POST, FETCH_POSTS_ERROR,  FETCH_POST_ERROR, LOADING} from "../actionTypes";
import axios from 'axios'
import API_ROUTE from "../../../constants";


export const searchPosts = title => {
    return (dispatch) => {
        dispatch({type: SEARCH_POSTS, payload: title})
    }
};


export const fetchPosts = title => dispatch => {
        axios.get(`http://127.0.0.1:9000/posts?q=${title}`)
            .then(res=> {
                dispatch({type: FETCH_POSTS, payload: res.data.response})
            })
            .catch(err=> {
                dispatch({type: FETCH_POSTS_ERROR, payload:err.response ? err.respons.data.error : ""})
            })
};

export const fetchPost = id => dispatch => {
        axios.get(`${API_ROUTE}/posts/${id}`)
            .then(res => {
                dispatch({type: FETCH_POST, payload: res.data.response})
            })
            .catch(err=> {
                dispatch({type: FETCH_POST_ERROR, payload: err.response.data.err})
            })
};

export const setLoading = () => {
    return {
        type: LOADING
    };
};