import React, { useState } from "react";
import line from "../../../Assets/login/line.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../../lib/axios.lib";

const Verifyotp = () => {
  const [error, setError] = useState(null);
  let Navigate = useNavigate();
  async function submitotp(values) {
    const { data } = await customAxios.post("/auth/verify-otp", values);
   if (data.message === "success") {
      Navigate("/auth/reset-passowrd")
    }
  }

  const validationSchema = Yup.object({
    otp: Yup.string()
      .required("This field is required")
      .matches(/^[0-9]{3,10}$/, "Enter numbers only"),
  });

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema,
    onSubmit: submitotp,
  });

  return (
    <div className="login-left">
      {error && <div className="alert mt-4 p-3 alert-info">{error}</div>}
      <h2>Verify Your Otp</h2>

      <img src={line} className="or" alt="Line separator" />
      <p className="or">Or</p>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.otp}
          id="otp"
          type="number"
          name="otp"
          placeholder="otp*"
        />
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

export default Verifyotp;
