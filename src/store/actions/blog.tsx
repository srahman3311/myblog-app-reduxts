import { ActionType } from "../action-types/ActionType";
import { BlogState } from "../interfaces/BlogState";

interface AddBlogAction {
    type: ActionType.ADD_BLOG,
    payload: BlogState
}

interface DeleteBlogAction {
    type: ActionType.DELETE_BLOG,
    payload: string
}


export type Action = AddBlogAction | DeleteBlogAction