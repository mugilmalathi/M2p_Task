import React from 'react'
import { useNavigate } from 'react-router'
import "./nav.scss"

const Navbar = () => {

    const navigate=useNavigate()

    const handleLogout=()=>{
      localStorage.setItem('token', JSON.stringify(''))
      localStorage.setItem('name', '')
      navigate("/login")
    }

    //Navbar name
    var str = localStorage.getItem('name');
    var res = ''
    for(var i=0; i<str.length; i++){
      if(str[i]==='@'){
        break
      }else{
        res+=str[i]
      }
    }
    
  return (
    <div className='navbar'>
      <div onClick={()=>navigate('/')}>Welcome to the Todo world..!</div>
      <div>{localStorage.getItem('name')!==''?'Welcome,':null} <span>{res}</span></div>
      <div>
        <button 
          className='signinn' 
          onClick={()=>{
            handleLogout()
        }}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
