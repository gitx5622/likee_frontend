import { combineReducers } from "redux"
import authReducer from "../auth/reducer/authReducer";
import { postsState} from "../posts/reducer/postsReducer";
import { likesState} from "../likes/reducer/likesReducer";
import { commentsState} from "../comments/reducer/commentsReducer";
import {searchState} from "../search/reducer/searchReducer";


const reducer = combineReducers({
    Auth: authReducer,
    PostsState: postsState,
    LikesState: likesState,
    CommentsState: commentsState,
    SearchState: searchState

});

export default reducer
