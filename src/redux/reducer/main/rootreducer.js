import { TodoReducer } from "../reducers/todoreducer"
import { combineReducers } from "redux"
import { signupReducer } from "../reducers/signupreducer"
import { signinReducer  } from "../reducers/signinreducer"

export const rootReducer = combineReducers({
    TodoReducer,
    signupReducer,
    signinReducer
})