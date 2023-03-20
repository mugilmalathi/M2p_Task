import * as actionTypes from "../../action/actionTypes"

const pending = []

export const doneTodoreducer=(state=pending, action)=>{
    switch (action.type) {
        case actionTypes.DONE_TODO:
            const { id, todo, pending } = action.payload
            return [...state, {
                id: id,
                todo: todo,
                pending: pending
            }]
        
        case actionTypes.GET_DONE_TODO:
            return action.payload

        case actionTypes.DELETE_DONE_TODO:
            return [...state]
    
        default:
            return state
    }
}