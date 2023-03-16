import thunk from "redux-thunk"
import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import { rootReducer } from "../reducer/main/rootreducer"


const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store