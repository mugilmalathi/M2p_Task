import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { signup } from '../../redux/action/actions'
import "./account.scss"

const Signup = () => {

  const navigate = useNavigate()
  const [signupData, setSignupData] = useState({})

  const dispatch = useDispatch()

  const handleChange=(e)=>{
    const { id, value } = e.target;
    setSignupData({
      ...signupData,
      [id]: value
    })
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    dispatch(signup(signupData))
  }

  return (
    <div>
      <div className='firstround'>
        <div className='secondround'>
          <div className='thirdround'>
          </div>
        </div>
      </div>

      <div className='signup'>
         <h2>REGISTER NOW</h2>
         <form onSubmit={onSubmit}>
           <input 
             type='text' 
             placeholder='enter name'
             id='name'
             onChange={handleChange}
           />
           <br />
           <input 
             type='text' 
             placeholder='enter username'
             id='username'
             onChange={handleChange}
           />
           <br />
           <input 
             type='text' 
             placeholder='enter email ID'
             id='email'
             onChange={handleChange}
           />
           <br />
           <input 
             type='password' 
             placeholder='enter password'
             id='password'
             onChange={handleChange}
            />
           <br />
           <button>Signin</button>
           <div onClick={()=>navigate("/login")}>Already have an account? Please <span>Signin</span></div>
         </form>
      </div>
    </div>
  )
}

export default Signup
