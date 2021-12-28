import { combineReducers } from "redux";
import blogReducer from "./blogReducer";


const reducers = combineReducers({
    blogs: blogReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;
