import { TodoReducer } from "../reducers/todoreducer"
import { doneTodoreducer } from "../reducers/doneTodoreducer"
import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    TodoReducer,
    doneTodoreducer
})