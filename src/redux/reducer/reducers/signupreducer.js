import * as actionTypes from "../../action/actionTypes"

const signup = []

export const signupReducer =(state=signup, action)=>{

    switch(action.type){
        case actionTypes.SIGNUP:
            const { email, password } = action.payload.user
            return [...state, {
                    email: email,
                    password: password,
                    token: action.payload.token
                }]

        case actionTypes.GET_SIGNUP:
            return action.payload


        default:
            return state
    }
}