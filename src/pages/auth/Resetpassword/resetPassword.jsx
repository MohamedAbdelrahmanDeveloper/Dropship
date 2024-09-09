import React, { useState } from "react";
import googleIcon from "../../../Assets/login/devicongoogle.png";
import facebookIcon from "../../../Assets/login/logofacebook.png"; // Corrected the import
import line from "../../../Assets/login/line.png";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../../lib/axios.lib";

const ResetPassword = () => {
  const [error, setError] = useState(null);
  let Navigate = useNavigate();
  async function submitresetpassword(values) {
 
      const response = await customAxios.post('/auth/reset-password', values).catch((err) => {
        setError(err.response.data.message);
      });
      console.log(response.data);
     
      if (response.data.status === 'success') {
        Navigate("/auth/login")
              
              }
    
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters'),
      passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Password confirmation is required'),
  });

  const formik = useFormik({
    initialValues: {
  
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema,
    onSubmit: submitresetpassword,
  });

  return (
    <div className="login-left">
      {error && <div className='alert mt-4 p-3 alert-info'>{error}</div>}
      <h2>Create Account</h2>
      <p>Welcome! Select a method to sign up</p>
      <div className="social-login">
        <button className="google-btn">
          <img src={googleIcon} alt="Google" />
          <span>Google</span>
        </button>
        <button className="facebook-btn">
          <img src={facebookIcon} alt="Facebook" />
          <span>Facebook</span>
        </button>
      </div>
      <img src={line} className="or" alt="Line separator" />
      <p className="or">Or</p>
      <form onSubmit={formik.handleSubmit}>
    
    
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          id='email'
          type='email'
          name='email'
          placeholder="Email*"
        />
        {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          id='password'
          name='password'
          type="password"
          placeholder="Password*"
        />
        {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.passwordConfirm}
          id='passwordConfirm'
          name='passwordConfirm'
          type="password"
          placeholder="Confirm your password*"
        />
        {formik.errors.passwordConfirm && formik.touched.passwordConfirm && <div>{formik.errors.passwordConfirm}</div>}
        <button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          className="login-btn"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
