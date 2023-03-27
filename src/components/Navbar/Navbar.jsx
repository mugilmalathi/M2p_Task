import { useColorMode } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router'
import "./nav.scss"
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Navbar = () => {

    const navigate=useNavigate()

    const {colorMode, toggleColorMode} = useColorMode()

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
      <div className={colorMode==='light'?'navbar':"navbar-dark"}>
        <div onClick={()=>navigate('/')}>Welcome to the Todo world..!</div>
        <div>{localStorage.getItem('name')!==''?'Welcome,':null} <span>{res}</span></div>
        <div>
        <button className='darkmode' onClick={toggleColorMode}>{colorMode==="light"?<BsFillMoonFill />:<BsFillSunFill />}</button>
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
