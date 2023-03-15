import thunk from "redux-thunk"
import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import { AddTodoReducer } from "../reducer/reducers/todoreducer"

const store = legacy_createStore(AddTodoReducer, applyMiddleware(thunk))

export default store