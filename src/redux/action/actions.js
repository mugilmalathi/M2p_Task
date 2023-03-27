import { ADD_TODO, DELETE_TODO, GET_SIGNUP, GET_TODO, SIGNIN, SIGNUP, UPDATE_TODO } from "./actionTypes"
import api from '../../Apis/api'
import Cookies from "js-cookie"

var token = Cookies.get('JWT_Token')

export const addTodo = (data)=> async(dispatch)=>{
    const response = await api.post(`/todo/create`, {todo: data}, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    dispatch({
        type: ADD_TODO,
        payload: response.data
    })
}

export const getTodo = ()=> async(dispatch)=>{
    const response = await api.get('/todo/list',{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    dispatch({
        type: GET_TODO,
        payload: response.data
    })
}

export const updateTodo =(data)=>async(dispatch)=>{
    const response = await api.patch(`/todo/update/${data._id}`,{
        id:data._id,
        todo:data.todo,
        status:"done"
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


export const signup =(data)=>async(dispatch)=>{
    const response = await api.post('/register',{
        email: data.email,
        password: data.password,
    })
    dispatch({
        type: SIGNUP,
        payload: response.data
    })
}

export const getUser = ()=> async(dispatch)=>{
    const response = await api.get("/register")
    dispatch({
        type: GET_SIGNUP,
        payload: response.data
    })
}

export const signin =(data)=>async(dispatch)=>{
    const response = await api.post('/login',{
        email: data.email,
        password: data.password,
    })
    let token = Cookies.set("JWT_Token", response.data.token)
    dispatch({
        type: SIGNIN,
        payload: response.data
    })
}