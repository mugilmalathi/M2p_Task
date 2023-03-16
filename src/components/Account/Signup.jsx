import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { signup } from '../../redux/action/actions'
import "./account.scss"

const Signup = () => {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [signupData, setSignupData] = useState([])

  console.log(signupData, "checking signup data...");

  const dispatch = useDispatch()
  const signupp = useSelector((store)=>store.signupReducer)
  console.log(signupp, "signupdata...");

  const handleSignUpData=(e)=>{
    e.preventDefault()
    setSignupData([...signupData, {
      name: name,
      email: email,
      username: username,
      password: password
    }])
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
         <form onSubmit={dispatch(signup(signupData))}>
           <input 
             type='text' 
             placeholder='enter name'
             value={name}
             onChange={(e)=>setName(e.target.value)}
           />
           <br />
           <input 
             type='text' 
             placeholder='enter username'
             value={username}
             onChange={(e)=>setUsername(e.target.value)}
           />
           <br />
           <input 
             type='text' 
             placeholder='enter email ID'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
           />
           <br />
           <input 
             type='password' 
             placeholder='enter password'
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
           <br />
           <button onClick={handleSignUpData}>Signin</button>
           <div onClick={()=>navigate("/login")}>Already have an account? Please <span>Signin</span></div>
         </form>
      </div>
    </div>
  )
}

export default Signup
