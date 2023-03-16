import { ADD_TODO, DELETE_DONE_TODO, DELETE_TODO, DONE_TODO } from "./actionTypes"

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

export const pendingTodo = (data)=>{
    return{
        type: DONE_TODO,
        payload: data
    }
}

export const deletePendingTodo = (id)=>{
    return{
        type: DELETE_DONE_TODO,
        payload: id
    }
}