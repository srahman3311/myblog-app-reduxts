import { BlogState } from "../interfaces/BlogState";
import { ActionType } from "../action-types/ActionType";
import { Action } from "../actions/blog";
import { Dispatch } from "redux";



export const addNewBlog = (blog: BlogState) => {
    return (dispatch: Dispatch<Action>) => dispatch({ type: ActionType.ADD_BLOG, payload: blog })
}


export const deleteBlog = (blogId: string) => {
    return (dispatch: Dispatch<Action>) => dispatch({ type: ActionType.DELETE_BLOG, payload: blogId})
}