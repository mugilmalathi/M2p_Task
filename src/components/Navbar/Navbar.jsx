import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router'
import "./nav.scss"

const Navbar = () => {

    const navigate=useNavigate()

    const handleLogout=()=>{
      localStorage.setItem('name', '')
      Cookies.remove("JWT_Token")
      navigate("/login")
    }

    const jwt = Cookies.get("JWT_Token")

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
    <>
      <div className='navbar'>
        <div onClick={()=>navigate('/')}>Welcome to the Todo world..!</div>
        <div>{localStorage.getItem('name')!==''?'Welcome,':null} <span>{res}</span></div>
        <div>
          <button 
            className='signinn' 
            onClick={()=>{
              handleLogout()
          }}>{!jwt?"Account":"Logout"}</button>
        </div>
      </div>
      {
        !jwt
        ? <div className='alertmsg'>Please login and add your daily tasks..!</div>
        : null
      }
    </>
  )
}

export default Navbar
