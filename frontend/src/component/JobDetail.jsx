import React from "react";
import { Link } from "react-router-dom";

const JobDetail = () => {
  return (
    <>
      <div style={{width:"800px",color:"white",padding:"1px",backgroundColor:"#448aff",margin:"20px auto", borderRadius:"10px"}}>
        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-center">Job Title: Software Engineer</h1>
            <div className="text-center mb-3">
              <span className="badge bg-primary" style={{ padding: "10px" }}>
                Posted By: Tesla
              </span>
              <span className="ms-2">Jan 3rd, 2024</span>
            </div>
            <h5
              className="mb-2"
              style={{ textDecoration: "underline", fontWeight: "bolder" }}
            >
              Description
            </h5>
            <p>
              Software engineering is the branch of computer science that deals
              with the design, development, testing, and maintenance of software
              applications. Software engineers apply engineering principles and
              knowledge of programming languages to build software solutions for
              end users.
            </p>
            <h6 className="mb-2" style={{ fontWeight: "bolder" }}>
              Deadline: Jan 25th, 2024
            </h6>
            <p className="mb-3">Job Vacancy: 1</p>
            <h5
              className="mb-2"
              style={{ textDecoration: "underline", fontWeight: "bolder" }}
            >
              Requirements
            </h5>
            <ul>
              <li>Python</li>
            </ul>
            <h5
              className="mb-2"
              style={{ textDecoration: "underline", fontWeight: "bolder" }}
            >
              Facilities
            </h5>
            <ul>
              <li>Food</li>
            </ul>
            <h6 className="mb-2">Salary: 500 TK</h6>
            <h6 className="mt-3" style={{ fontWeight: "bolder" }}>
              To Apply
            </h6>
            <p>
              Send Your CV/Resume <br />{" "}
              <span style={{ fontWeight: "500" }}>Email: </span>jobs@tesla.com
            </p>
            {/* <p>Email: jobs@tesla.com</p> */}

            <br />

            <Link to={"/login"}><button type="button" className="btn" style={{marginBottom:"30px",backgroundColor:"white"}}>Apply</button></Link>


            {/* <h6 classNameName="mb-3" style={{ textDecoration: "underline", fontWeight: "500" }}>Upload Resume:</h6>
            <div className="input-group row mb-3">
                <div classNameName="col-md-8" style={{display:"flex"}}>
              <input type="file" className="form-control" id="inputGroupFile02" />
              <button type="button" className="btn"><i className="fa-solid fa-arrow-right" style={{fontSize:"30px",color:"white"}}></i></button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
