import { combineReducers } from "redux"
import { TodoReducer } from "../reducers/todoreducer"
import { signupReducer } from "../reducers/signupreducer"
import { signinReducer  } from "../reducers/signinreducer"

export const rootReducer = combineReducers({
    TodoReducer,
    signupReducer,
    signinReducer
})