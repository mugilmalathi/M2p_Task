import * as actionTypes from "../../action/actionTypes"

const signup = []

export const signupReducer =(state=signup, action)=>{
    switch(action.type){
        case actionTypes.SIGNUP:
            const { name, email, username, password } = action.payload
            return [
                ...state, 
                {
                name: name,
                email: email,
                username: username,
                password: password
            }
        ]
        default:
            return state
    }
}