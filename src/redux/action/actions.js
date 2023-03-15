import { ADD_TODO, DELETE_TODO } from "./actionTypes"

export const addTodo = (data)=>{
    return {
        type: ADD_TODO,
        payload:{
            id: new Date().getTime().toString(),
            todo: data
        }
    }
}

export const deleteTodo = (id)=>{
    return{
        type: DELETE_TODO,
        payload: id
    }
}