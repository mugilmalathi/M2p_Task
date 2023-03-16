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

        case actionTypes.DELETE_DONE_TODO:
            const uID = action.payload;
            return state.filter((ele)=> ele.id !== uID)
    
        default:
            return state
    }
}