import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const JobApplicationForm = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Required"),
      email: yup.string().email("Invalid email").required("Required"),
      phone: yup.string().required("Required"),
      coverLetter: yup.string().required("Required"),
      resume: yup.mixed().required("Required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      // Handle form submission here
      console.log(values);
      setSubmitting(false);
      navigate("/userapplication")
    },
  });

  const handleResumeChange = (event) => {
    setResumeFile(event.target.files[0]);
    formik.setFieldValue("resume", event.target.files[0]);
  };

  return (
    <div className="container" style={{ width: "800px", padding: "20px" }}>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center">Job Application Form</h3>
          <form className="row g-3" onSubmit={formik.handleSubmit}>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Job Position
            </label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="job position"/>
          </div>
          <div className="col-md-6">
            <label for="inputUsername4" className="form-label">
              Company Name
            </label>
            <input
              type="Username"
              className="form-control"
              id="inputUsername4"
              placeholder="company name"
            />
          </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name"
              />
              {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                id="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your phone number"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div style={{ color: "red" }}>{formik.errors.phone}</div>
              ) : (
                ""
              )}
            </div>
            
            <div className="form-group col-md-6">
              <label htmlFor="resume">Resume</label>
              <input
                type="file"
                name="resume"
                className="form-control"
                id="resume"
                onChange={handleResumeChange}
              />
              {formik.touched.resume && formik.errors.resume ? (
                <div style={{ color: "red" }}>{formik.errors.resume}</div>
              ) : (
                ""
              )}
            </div>

            <div className="form-group ">
              <label htmlFor="coverLetter">Cover Letter</label>
              <textarea
                name="coverLetter"
                className="form-control"
                id="coverLetter"
                value={formik.values.coverLetter}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your cover letter"
              />
              {formik.touched.coverLetter && formik.errors.coverLetter ? (
                <div style={{ color: "red" }}>{formik.errors.coverLetter}</div>
              ) : (
                ""
              )}
            </div>
            
            <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-primary ">
              Submit Application
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
