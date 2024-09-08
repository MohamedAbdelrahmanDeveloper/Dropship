import React from "react";
// import "./signup.css";
import googleIcon from "../../../Assets/login/devicongoogle.png";
import FacebockIcon from "../../../Assets/login/logofacebook.png";
import line from "../../../Assets/login/line.png";
const SignUp = () => {
  return (
    <>
      <div className="login-left">
        <h2>Create Account</h2>
        <p>Welcome select method to Sign up</p>
        <div className="social-login">
          <button className="google-btn">
            {" "}
            <img src={googleIcon} /> <span>Google</span>
          </button>
          <button className="facebook-btn">
            {" "}
            <img src={FacebockIcon} /> <span>Google</span>
          </button>
        
        </div>
        
        <img src={line} className="or" alt="" />

        <p className="or">Or</p>
        <form>
                <input type="text" placeholder="Name*" />
                <input type="text" placeholder="Email*" />
                <input type="password" placeholder="Password*" />
                <input type="password" placeholder="Confirm your password*" />

          <button type="submit" className="login-btn">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;