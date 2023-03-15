import React from 'react'
import { Routes, Route } from 'react-router'
import Signin from '../Account/Signin'
import Signup from '../Account/Signup'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
