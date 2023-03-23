import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "./account.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getUser, signin } from "../../redux/action/actions";
import { useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";
import bcrypt from 'bcryptjs'

const Signin = () => {

  const navigate = useNavigate();
  const {
    register,
    formState:{errors},
    handleSubmit
  } = useForm()

  const userData = useSelector((store) => store.signupReducer);
  
  const dispatch = useDispatch()
  const toast = useToast()

  useEffect(()=>{
    dispatch(getUser())
  }, [])

  const onSubmit=async(fields)=>{

    const user = await userData.find((ele)=>ele.email===fields.email)
    var pwd;
    userData.map((ele)=>{
      if(fields.email===ele.email){
        Cookies.set("UserID", ele._id)
        pwd = ele.password;
      }
    })   
    const loginPwd = bcrypt.compareSync(fields.password, pwd)

    if(!user) {
      toast({
        title: `User not found`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }else if(!loginPwd){
      toast({
        title: `Please check your credentials`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }else{
      dispatch(signin(fields))
      toast({
        title: `Login Successful`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTimeout(()=>{
        navigate('/')
        window.location.reload()
      }, 2000)
    }

    localStorage.setItem("name", fields.email)
    
  }

  return (
    <div>
      <div className="firstround">
        <div className="secondround">
          <div className="thirdround"></div>
        </div>
      </div>

      <div className="signin">
        <h2>SIGNIN</h2>
        {errors.email || errors.password ? (<div className="text-danger text-center mt-5">Do not empty.! Please enter your credentials.</div>) : null}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="enter email ID"
            {...register("email", {required: true})}
          />
          <br />
          <input
            type="password"
            placeholder="enter password"
            {...register("password", {required: true})}
          />
          <br />
          <button>Signin</button>
          <div onClick={() => navigate("/signup")}>
            Don't have an account? Please <span>Signup</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
