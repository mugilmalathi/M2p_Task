import { ADD_TODO, DELETE_DONE_TODO, DELETE_TODO, DONE_TODO, GET_DONE_TODO, GET_TODO, SIGNIN, SIGNUP, UPDATE_TODO } from "./actionTypes"
import bcrypt from 'bcryptjs'
import api from '../../Apis/api'

export const addTodo = (data)=> async(dispatch)=>{
    const response = await api.post('/todo/create', {
        id: new Date().getTime().toString(),
        todo: data,
        pending: false
    })
    dispatch({
        type: ADD_TODO,
        payload: response.data
    })
}

export const getTodo = ()=> async(dispatch)=>{
    const response = await api.get("/todo/list")
    dispatch({
        type: GET_TODO,
        payload: response.data
    })
}

export const updateTodo =(data)=>async(dispatch)=>{
    const response = await api.patch(`/todo/update/${data._id}`,{
        id:data._id,
        todo:data.todo,
        pending:true
    })
    dispatch({
        type: UPDATE_TODO,
        payload: response.data
    })
}

export const deleteTodo = (id)=>async(dispatch)=>{
    const response = await api.delete(`/todo/delete/${id}`)
    return{
        type: DELETE_TODO
    }
}

export const doneTodo = (data) => async (dispatch) => {
    const response = await api.post(`/done-todo/create`,{
        id: data.id,
        todo: data.todo,
        pending: true
    })
    dispatch({
        type: DONE_TODO,
        payload: response.data
    })
}

export const getDoneTodo = ()=> async(dispatch)=>{
    const response = await api.get("/done-todo/list")
    dispatch({
        type: GET_DONE_TODO,
        payload: response.data
    })
}

export const deleteDoneTodo = (id)=>async(dispatch)=>{
    const response = await api.delete(`/done-todo/delete/${id}`)
    return{
        type: DELETE_DONE_TODO,
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