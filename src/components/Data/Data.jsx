import React from 'react'
import "./data.scss"
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

const Data = () => {
  return (
    <div className='data'>
      <div className='datalist'>
        <div>1</div>
        <div>Need to fix the yesterday's bug</div>
        <div><button><BsCheckSquareFill /></button></div>
        <div><button><BsFillTrashFill /></button></div>
      </div>
    </div>
  )
}

export default Data
