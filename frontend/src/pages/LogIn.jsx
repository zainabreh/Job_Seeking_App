import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../Redux/Feature/auth/auth.api";
import { useDispatch } from "react-redux";
import {setUserInfo} from '../../Redux/Feature/auth/auth.slice.js'

const LogIn = () => {
  const [loginUser,{data,isLoading,error}] = useLoginUserMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [apimsg, setApimsg] = useState("");
  const { handleChange, handleSubmit,handleReset, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        email: yup.string().required("Reqiured"),
        password: yup.string().required("Required"),
      }),
      onSubmit: async (v) => {
        await loginUser(v)
        handleReset()
        navigate('/')
      },
    });

  return (
    <>
      <div class="container" style={{ width: "400px", padding: "20px" }}>
        <div class="card">
          <div class="card-body">
            <div class="logo">
              <i
                class="fa-solid fa-briefcase"
                style={{ fontSize: "30px", color: "#2962ff" }}
              ></i>
              &nbsp;&nbsp;
              <span
                style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  color: "#2962ff",
                }}
              >
                Jobs
              </span>
            </div>

            <h3 class="card-title text-center">Sign In</h3>
            {apimsg && (
          <div
            class={`alert alert-${
              apimsg && apimsg.success ? "success" : "danger"
            }`}
            role="alert"
          >
            {apimsg && apimsg.message}
          </div>
        )}
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  class="form-control"
                  id="email"
                  value={values.email}
                  placeholder="Email@example.com"
                />
                {touched.email && errors.email ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : (
                  ""
                )}
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Type Here"
                />
                {touched.password && errors.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : (
                  ""
                )}
              </div>

              <button type="submit" class="btn btn-primary btn-block">
                LogIn
              </button>
            </form>
            <div class="text-center">
              <p>
                Don't have an account?{" "}
                <span style={{ cursor: "pointer", color: "#2962ff" }}>
                  <Link to={"/signup"}>Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
