import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/action/actions'
import "./addtodo.scss"

const Search = () => {

  const[searchVal, setSearchVal]=useState('')
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
  } = useForm()

const onSubmit=(fields)=>{
  dispatch(addTodo(fields.todo))
}

  return (
    <div className='search'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type='text'
          placeholder='add todo..!'
          {...register('todo', {required:true})}
          onChange={(e)=>{
              setSearchVal(e.target.value)
          }}
        />
     <button>Add Todo</button>
      </form>
    </div>
  )
}

export default Search
