import thunk from "redux-thunk"
import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import { TodoReducer } from "../reducer/reducers/todoreducer"

const store = legacy_createStore(TodoReducer, applyMiddleware(thunk))

export default store