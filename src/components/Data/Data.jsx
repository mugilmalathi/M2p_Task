import React from 'react'
import "./data.scss"
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../redux/action/actions';

const Data = () => {

  const todo = useSelector((store)=>store)
  const dispatch = useDispatch()

  return (
    <div className='data'>
      {
        todo.map((el,i)=>{
          return(
            <div className='datalist'>
              <div>{i+1}</div>
              <div>{el.todo}</div>
              <div><button><BsCheckSquareFill /></button></div>
              <div><button onClick={()=>dispatch(deleteTodo(el.id))}><BsFillTrashFill /></button></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Data
