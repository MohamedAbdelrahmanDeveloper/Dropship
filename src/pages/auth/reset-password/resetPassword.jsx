import React, { useState } from "react";
import line from "../../../Assets/login/line.png";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../../lib/axios.lib";

const ResetPasswordPage = () => {
  const [error, setError] = useState(null);
  let Navigate = useNavigate();
  async function submitRegister(values) {
      const response = await customAxios.post('/auth/reset-password', values)
      if (response.data.message === "success") {
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
    onSubmit: submitRegister,
  });

  return (
    <div className="login-left">
      {error && <div className='alert mt-4 p-3 alert-info'>{error}</div>}
      <h2>Reset Password</h2>
      <img src={line} className="or" alt="Line separator" />
      <p className="or">Or</p>
      <form className="login-form" onSubmit={formik.handleSubmit}>
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
          Reset
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
