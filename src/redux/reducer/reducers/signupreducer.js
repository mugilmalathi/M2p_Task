import * as actionTypes from "../../action/actionTypes"

const signup = []

export const signupReducer =(state=signup, action)=>{
    switch(action.types){
        case actionTypes.SIGNUP:
            return[
                ...state, action.payload
            ]
        default:
            return state
    }
}