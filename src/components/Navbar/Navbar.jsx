import React from 'react'
import { useNavigate } from 'react-router'
import "./nav.scss"

const Navbar = () => {

    const navigate=useNavigate()
    
  return (
    <div className='navbar'>
      <div onClick={()=>navigate('/')}>Welcome to the Todo world..!</div>
      <div><button className='signinn' onClick={()=>{navigate("/login")}}>Signin</button></div>
    </div>
  )
}

export default Navbar
