import * as actionTypes from "../../action/actionTypes"

const pending = []

export const doneTodoreducer=(state=pending, action)=>{
    switch (action.type) {
        case actionTypes.DONE_TODO:
            return [...state, action.payload]

        case actionTypes.DELETE_DONE_TODO:
            const uID = action.payload;
            return state.filter((ele)=> ele.id !== uID)
    
        default:
            return state
    }
}