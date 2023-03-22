import React, { useState } from 'react'
import Filter from '../Filter/Filter'
import Search from '../AddTodo/AddTodo'

const Home = () => {
  
  return (
    <div>
      <Search />
      <Filter />
    </div>
  )
}

export default Home
