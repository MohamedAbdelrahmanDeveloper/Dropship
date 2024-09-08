import React from "react";
import "./login.css";
import googleIcon from "../../../Assets/login/devicongoogle.png";
import FacebockIcon from "../../../Assets/login/logofacebook.png";
import line from "../../../Assets/login/line.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="login-left">
        <h2>Log in to your account</h2>
        <p>Welcome back select method to login</p>
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
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <Link to={'/auth/forgot-password'}><p className="forgot-password">Forgot your password?</p></Link>
          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;