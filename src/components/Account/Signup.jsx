import { useToast } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { signup } from '../../redux/action/actions'
import "./account.scss"

const Signup = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()

  const {
    register,
    formState:{errors},
    handleSubmit
  } = useForm()

  const onSubmit=(fields)=>{
    dispatch(signup(fields))
    toast({
      title: `Signup Successful`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setTimeout(()=>{
      navigate('/login')
    }, 3000)
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
         <form onSubmit={handleSubmit(onSubmit)}>
           <input 
             type='text' 
             placeholder='enter email ID'
             id='email'
             {...register("email", { required: true })}
           />
           {errors.email && (<div className='text-danger'>Please enter email</div>)}
           <br />
           <input 
             type='password' 
             placeholder='enter password'
             id='password'
             {...register("password", { required: true })}
            />
            {errors.password && (<div className='text-danger'>Please enter password</div>)}
           <br />
           <button>Register</button>
           <div onClick={()=>navigate("/login")}>Already have an account? Please <span>Signin</span></div>
         </form>
      </div>
    </div>
  )
}

export default Signup
