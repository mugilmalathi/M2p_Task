import * as actionTypes from "../../action/actionTypes";

const todo = []

export const getTodoReducer=(state=todo, action)=>{

    switch(action.type){

        case actionTypes.GET_TODO:
            return [...state, {
                todo: action.payload
            }]

        default:
            return state

    }
}