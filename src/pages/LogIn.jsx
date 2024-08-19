import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

const LogIn = () => {
  const [signup, setSignup] = useState(false);
  const [formData,setFormData] = useState([])

  const toggleSignup = () => {
    setSignup(!signup);
  };

  const { handleChange, handleSubmit, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        cpassword: "",
      },
      validationSchema: yup.object({
        username: yup
          .string()
          .required("Required"),
          email: yup
          .string()
          .required("Reqiured"),
          password: yup.string().required("Required"),
        cpassword: yup.string().required("Required"),
      }),
      onSubmit: (v) => {
        console.log(v);
        setFormData(v)
        console.log(formData);
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
            {!signup ? (
              <h3 class="card-title text-center">Sign In</h3>
            ) : (
              <h3 class="card-title text-center">Sign Up</h3>
            )}

            <form onSubmit={handleSubmit}>
              <div class="form-group">
                {signup && (
                  <>
                    <label for="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      class="form-control"
                      id="username"
                      value={values.username}
                      placeholder="Type Here"
                    />
                    {touched.username && errors.username ? (<div style={{color:'red'}}>{errors.username }</div>) : ("")}
                  </>
                )}
              </div>
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
                {touched.email && errors.email ? (<div style={{color:'red'}}>{errors.email }</div>) : ("")}
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
                {touched.password && errors.password ? (<div style={{color:'red'}}>{errors.password }</div>) : ("")}
              </div>
              <div class="form-group">
                {signup && (
                  <>
                    <label for="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      name="cpassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cpassword}
                      class="form-control"
                      id="confirmPassword"
                      placeholder="Type Here"
                    />
                    {touched.cpassword && errors.cpassword ? (<div style={{color:'red'}}>{errors.cpassword }</div>) : ("")}
                  </>
                )}
              </div>
              {signup ? (
                <button type="submit" class="btn btn-primary btn-block">
                  Register
                </button>
              ) : (
                <button type="submit" class="btn btn-primary btn-block">
                  LogIn
                </button>
              )}
            </form>
            <div class="text-center">
              {!signup ? (
                <>
                  <p>
                    Don't have an account?{" "}
                    <span
                      onClick={toggleSignup}
                      style={{ cursor: "pointer", color: "#2962ff" }}
                    >
                      Register
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Already have an account?{" "}
                    <span
                      onClick={toggleSignup}
                      style={{ cursor: "pointer", color: "#2962ff" }}
                    >
                      LogIn
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
