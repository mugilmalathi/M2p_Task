import * as actionTypes from "../../action/actionTypes"

const signin = []

export const signinReducer =(state=signin, action)=>{
    switch(action.type){
        case actionTypes.SIGNIN:
            const { email, password } = action.payload.user
            return [
                ...state, 
                {
                    email: email,
                    password: password,
                    token: action.payload.token,
                    id: action.payload.user._id
                }
        ]

        default:
            return state
    }
}