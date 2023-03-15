import * as actionTypes from "../../action/actionTypes";

const todo = []

export const TodoReducer=(state=todo, action)=>{

    switch(action.type){

        case actionTypes.ADD_TODO:
            const { id, todo } = action.payload;
            if (todo !== "") {
                return [
                    ...state,
                    {
                        id: id,
                        todo: todo
                    }
                ];
            } else {
                return state;
            }
        
        case actionTypes.DELETE_TODO:
            const uID = action.payload
            return state.filter((ele)=> ele.id !== uID)

        default:
            return state

    }
}