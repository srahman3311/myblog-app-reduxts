import { BlogState } from "../interfaces/BlogState";
import { ActionType } from "../action-types/ActionType";
import { Action } from "../actions/blog";


const blogReducer = (state: BlogState[] = [], action: Action): BlogState[] => {

    switch(action.type) {
        
        case ActionType.ADD_BLOG:
            return [...state, action.payload];

        case ActionType.DELETE_BLOG: 
            const filteredBlogs: BlogState[] = state.filter(blog => blog.id !== action.payload)
            return filteredBlogs;
        
        default:
            return state;

    }
}

export default blogReducer;