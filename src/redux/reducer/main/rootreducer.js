import { TodoReducer } from "../reducers/todoreducer"
import { doneTodoreducer } from "../reducers/doneTodoreducer"
import { combineReducers } from "redux"
import { signupReducer } from "../reducers/signupreducer"

export const rootReducer = combineReducers({
    TodoReducer,
    doneTodoreducer,
    signupReducer
})