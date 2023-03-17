import { ADD_TODO, DELETE_DONE_TODO, DELETE_TODO, DONE_TODO, SIGNIN, SIGNUP, UPDATE_TODO } from "./actionTypes"
import bcrypt from 'bcryptjs'

export const addTodo = (data)=>{
    return {
        type: ADD_TODO,
        payload:{
            id: new Date().getTime().toString(),
            todo: data,
            pending: false
        }
    }
}

export const updateTodo =(data)=>{
    return {
        type: UPDATE_TODO,
        payload:{
            id: data.id,
            todo: data.todo,
            pending: true
        }
    }
}

export const deleteTodo = (id)=>{
    return{
        type: DELETE_TODO,
        payload: id
    }
}

export const doneTodo = (data)=>{
    return{
        type: DONE_TODO,
        payload: {
            id: data.id,
            todo: data.todo,
            pending: true
        }
    }
}

export const deleteDoneTodo = (id)=>{
    return{
        type: DELETE_DONE_TODO,
        payload: id
    }
}

export const signup =(data)=>{
    const hashedPassword = bcrypt.hashSync(data.password, 10)
    return{
        type: SIGNUP,
        payload: {
            name: data.name,
            username: data.username,
            email: data.email,
            password: hashedPassword
        }
    }
}

export const signin =(data)=>{
    return{
        type: SIGNIN,
        payload:{
            email: data.email,
            password: data.password
        }
    }
}