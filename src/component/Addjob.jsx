import React from "react";

const Addjob = () => {
  return (
    <>
      <div className="container">
        <h2 style={{textAlign:"center",marginBlock:"20px",fontWeight:"600",color:"white"}}>Create New Job</h2>
        <form className="row g-3" style={{  color: "white"
}}>
          <div className="col-md-4">
            <label for="inputEmail4" className="form-label">
              Position
            </label>
            <input type="text" className="form-control" id="inputEmail4" placeholder="Job Position"/>
          </div>
          <div className="col-md-4">
            <label for="inputPassword4" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="Company Name"
            />
          </div>
          <div className="col-md-4">
            <label for="inputAddress" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Job Location"
            />
          </div>
          <div className="col-md-4">
            <label for="inputEmail4" className="form-label">
              Job Status
            </label>
            <select id="inputState" className="form-select" >
              <option selected>Select a Job Status</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-4">
            <label for="inputPassword4" className="form-label">
              Job Type
            </label>
            <select id="inputState" className="form-select" >
              <option selected>Select a Job Type</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-4">
            <label for="inputAddress" className="form-label">
              Vacancy
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Job Vacancy"
            />
          </div>
          <div className="col-md-4">
            <label for="inputEmail4" className="form-label">
              Salary
            </label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Job Salary"/>
          </div>
          <div className="col-md-4">
            <label for="inputPassword4" className="form-label">
              Deadline
            </label>
            <input
              type="date"
              className="form-control"
              id="inputPassword4"
              placeholder="Company Name"
            />
          </div>
          <div className="col-md-4">
            <label for="inputAddress" className="form-label">
              Contact Mail
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Job Contact"
            />
          </div>




          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              Job Facilities
            </label>
            <input type="text" className="form-control" id="inputCity" placeholder="Type Here"/>
          </div>
          <div className="col-md-6">
            <label for="inputState" className="form-label">
              Required Skill
            </label>
            <input type="text" className="form-control" id="inputCity" placeholder="HTML,CSS"/>
          </div>
          



          <div className="col-12">
            
          <label for="inputState" className="form-label">
              Job Description
            </label>
            <textarea type="text" rows="50" className="form-control" id="inputCity"></textarea>
           
            
          </div>




          <div className="col-12">
            <button type="submit" className="btn" style={{marginTop:"20px",backgroundColor:"white"}}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addjob;
