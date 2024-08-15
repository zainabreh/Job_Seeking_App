import React from "react";
import { Link } from "react-router-dom";

const Updateprofile = () => {
  return (
    <>
      <div className="container">
        <h3 style={{marginBlock:"15px"}}><span style={{ textDecoration:"underline", textDecorationColor:"blue",textDecorationThickness:"3px"}}>Upd</span>ate Profile</h3>
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="abc@gmail.com"/>
          </div>
          <div className="col-md-6">
            <label for="inputUsername4" className="form-label">
              Username
            </label>
            <input
              type="Username"
              className="form-control"
              id="inputUsername4"
              placeholder="abc"
            />
          </div>
          <div className="col-md-6">
            <label for="inputRole" className="form-label">
              Role
            </label>
            <input
              type="text"
              className="form-control"
              id="inputRole"
              placeholder="user"
            />
          </div>
          <div className="col-md-6">
            <label for="inputLocation" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="inputLocation"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label for="inputGender" className="form-label">
              Gender
            </label>
            <input type="text" className="form-control" id="inputGender" placeholder="gender"/>
          </div>
          
          <div className="col-12" style={{textAlign:"center",marginTop:"40px"}}>
            <Link to={"/usepProfileCard"}><button type="submit" className="btn btn-primary" style={{fontSize:"16.5px",fontWeight:"700"}}>
             Update Profile
            </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Updateprofile;
