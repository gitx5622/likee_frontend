import {FETCH_POST, FETCH_POSTS, SEARCH_POSTS,LOADING} from "../actionTypes";

const initialState = {
    title: '',
    postsx: [],
    loading: false,
    postx: []
};

export const searchState = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_POSTS:
            return {
                ...state,
                title: action.payload,
                loading: false
            };
        case FETCH_POSTS:
            return {
                ...state,
                postsx: action.payload,
                loading: false
            };
        case FETCH_POST:
            return {
                ...state,
                postx: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}