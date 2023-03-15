import React, { useState } from 'react'
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
