import React from 'react'
import { useNavigate } from 'react-router'
import "./nav.scss"

const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='navbar'>
      <div>Welcome to the Todo world..!</div>
      <div><button className='signin' onClick={()=>{navigate("/login")}}>Signin</button></div>
    </div>
  )
}

export default Navbar
