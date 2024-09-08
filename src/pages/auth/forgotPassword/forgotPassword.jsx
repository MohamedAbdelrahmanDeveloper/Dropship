import React from 'react'
import line from "../../../Assets/login/line.png";

import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="login-left">
        <h2>Forgot password</h2>        
        <img src={line} className="or" alt="" />
        <form>
          <input type="email" placeholder="Email" required />
          <button type="submit" className="login-btn">
            Log in
          </button>
          <Link to={'/auth/login'}><p className="forgot-password">login ?</p></Link>
        </form>
      </div>
  )
}
