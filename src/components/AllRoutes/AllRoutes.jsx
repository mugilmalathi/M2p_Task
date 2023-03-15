import React from 'react'
import { Routes, Route } from 'react-router'
import Signin from '../Account/Signin'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Signin />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
