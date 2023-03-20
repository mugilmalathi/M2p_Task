import * as actionTypes from "../../action/actionTypes";

const todo = []

export const TodoReducer=(state=todo, action)=>{

    switch(action.type){

        case actionTypes.ADD_TODO:
            const { id, todo, pending } = action.payload;
            if (todo !== "") {
                return [
                    ...state,
                    {
                        id: id,
                        todo: todo,
                        pending: pending
                    }
                ];
            } else {
                return state;
            }

        case actionTypes.GET_TODO:
            return action.payload

        case actionTypes.UPDATE_TODO:
            return[...state, {
                id: action.payload.id,
                todo: action.payload.todo,
                pending: action.payload.pending
            }]
        
        case actionTypes.DELETE_TODO:
            return [...state]

        default:
            return state

    }
}