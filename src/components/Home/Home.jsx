import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, subTodo } from '../../redux/action/actions'
import Filter from '../Filter/Filter'
import Search from '../Search/Search'

const Home = () => {

    const[searchshow, setSearchShow]=useState(false)

  return (
    <div>
      <Search 
        searchshow={searchshow}
        setSearchShow={setSearchShow}
      />
      <Filter />
    </div>
  )
}

export default Home
