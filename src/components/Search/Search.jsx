import React from 'react'
import "./search.scss"

const Search = ({searchshow, setSearchShow}) => {
  return (
    <div className='search'>
      <input 
        type='text'
        placeholder='add todo..!'
        onChange={(e)=>{
            setSearchShow(true)
        }}
      />
      <button>Add Todo</button>
    </div>
  )
}

export default Search
