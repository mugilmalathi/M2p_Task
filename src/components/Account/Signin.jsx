import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./account.scss";
import bcrypt from "bcryptjs";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getSignin, getSignup, signin } from "../../redux/action/actions";
import { useToast } from "@chakra-ui/react";

const Signin = () => {

  const navigate = useNavigate();
  const {
    register,
    formState:{errors},
    handleSubmit
  } = useForm()

  const signupdata = useSelector((store) => store.signupReducer);
  const signindata = useSelector((store) => store.signinReducer);

  signindata.map((el)=>{
    localStorage.setItem("token", JSON.stringify(el.token))
  })
  
  const dispatch = useDispatch()
  const toast = useToast()

  useEffect(()=>{
    dispatch(getSignup())
    dispatch(getSignin())
  }, [])

  const onSubmit=async(fields)=>{
    const user = await signupdata.find((ele)=>ele.email===fields.email)
    const pwd = bcrypt.compareSync("B4c0/\/", fields.password); 
    console.log(pwd, "pwd");
    if(!user) {
      toast({
        title: `User not found`,
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
      }, 2000)
    }
    localStorage.setItem("name", fields.email)
    // const match = user.checkPassword(fields.password)
    // if(!match) console.log("User not found")
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
