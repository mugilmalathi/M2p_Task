import React from 'react'
import { useNavigate } from 'react-router'
import "./account.scss"

const Signin = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className='firstround'>
        <div className='secondround'>
          <div className='thirdround'>
          </div>
        </div>
      </div>

      <div className='signin'>
         <h2>SIGNIN</h2>
         <form>
           <input type='text' placeholder='enter email ID'/>
           <br />
           <input type='password' placeholder='enter password'/>
           <br />
           <button>Signin</button>
           <div onClick={()=>navigate("/signup")}>Don't have an account? Please <span>Signup</span></div>
         </form>
      </div>
    </div>
  )
}

export default Signin
