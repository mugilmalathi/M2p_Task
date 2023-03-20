import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./account.scss";
import bcrypt from "bcryptjs";
import { useSelector } from "react-redux";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupdata = useSelector((store) => store.signupReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    const hashedPwd = bcrypt.hashSync(password, 10);
    const equalhashing = signupdata.find((ele) => ele.password === password);

    if (equalhashing) {
      bcrypt.compare(password, hashedPwd, function (err, isMatch) {
        if (err) {
          console.log(err);
        } else if (!isMatch) {
          console.log("Password doesn't matched..!");
        } else {
          console.log("Password matched..!");
        }
      });
    }
  };

  return (
    <div>
      <div className="firstround">
        <div className="secondround">
          <div className="thirdround"></div>
        </div>
      </div>

      <div className="signin">
        <h2>SIGNIN</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter email ID"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="enter password"
            onChange={(e) => setPassword(e.target.value)}
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
