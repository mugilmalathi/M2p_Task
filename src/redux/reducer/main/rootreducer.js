import { TodoReducer } from "../reducers/todoreducer"
import { getTodoReducer } from "../reducers/getTodoReducer"
import { doneTodoreducer } from "../reducers/doneTodoreducer"
import { combineReducers } from "redux"
import { signupReducer } from "../reducers/signupreducer"

export const rootReducer = combineReducers({
    TodoReducer,
    getTodoReducer,
    doneTodoreducer,
    signupReducer
})