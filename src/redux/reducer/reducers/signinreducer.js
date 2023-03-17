import * as actionTypes from "../../action/actionTypes"

const signin = []

export const signinReducer =(state=signin, action)=>{
    switch(action.type){
        case actionTypes.SIGNIN:
            const { email, password } = action.payload
            return [
                ...state, 
                {
                    email: email,
                    password: password
                }
        ]
        default:
            return state
    }
}