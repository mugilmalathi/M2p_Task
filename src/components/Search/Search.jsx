import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/action/actions'
import "./search.scss"

const Search = ({searchshow, setSearchShow}) => {

  const[searchVal, setSearchVal]=useState('')
  const dispatch = useDispatch()
  const todo = useSelector((store)=>store)

  return (
    <div className='search'>
      <input 
        type='text'
        placeholder='add todo..!'
        onChange={(e)=>{
            setSearchShow(true)
            setSearchVal(e.target.value)
        }}
      />
      <button onClick={()=>dispatch(addTodo(searchVal))}>Add Todo</button>
    </div>
  )
}

export default Search
