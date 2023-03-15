import React from 'react'
import { useNavigate } from 'react-router'
import "./account.scss"

const Signup = () => {

  const navigate = useNavigate()

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
         <form>
           <input type='text' placeholder='enter username'/>
           <br />
           <input type='text' placeholder='enter email ID'/>
           <br />
           <input type='password' placeholder='enter password'/>
           <br />
           <button>Signin</button>
           <div onClick={()=>navigate("/login")}>Already have an account? Please <span>Signin</span></div>
         </form>
      </div>
    </div>
  )
}

export default Signup
