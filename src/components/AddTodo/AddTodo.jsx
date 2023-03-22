import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/action/actions'
import "./addtodo.scss"

const Search = () => {

  const[searchVal, setSearchVal]=useState('')
  const dispatch = useDispatch()

  return (
    <div className='search'>
      <input 
        type='text'
        placeholder='add todo..!'
        onChange={(e)=>{
            setSearchVal(e.target.value)
        }}
      />
      <button onClick={()=>dispatch(addTodo(searchVal))}>Add Todo</button>
    </div>
  )
}

export default Search
