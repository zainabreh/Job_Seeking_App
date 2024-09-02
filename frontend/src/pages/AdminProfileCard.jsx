import React from "react";
import { Link } from "react-router-dom";

const AdminProfileCard = () => {
  return (
    <>
      <div className="Usercontainer" style={{ marginBlock: "80px" }}>
        <div className="usercard mb-3">
          <div className="row g-0">
            <div>
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ fontSize: "25px", marginBlock: "25px" ,textAlign:"justify",marginLeft:"20px"}}
                >
                  <span style={{textDecoration: "underline",
                    textDecorationColor: "white",
                    textDecorationThickness: "3px",}}>Ad</span>min Information
                </h5>
                <table
                  className="table table-borderless review_table"
                  
                >
                 
                  <tbody>
                    <tr>
                      <td scope="col" style={{ fontWeight: "600" }}>
                        AdminName:
                      </td>
                      <td style={{fontWeight:"600"}}>John</td>
                    </tr>
                    <tr>
                      <td scope="col" style={{ fontWeight: "600"}}>
                        Role:
                      </td>
                      <td style={{fontWeight:"600"}}>admin</td>
                    </tr>
                    <tr>
                      <td scope="col" style={{ fontWeight: "600"}}>
                        Email:
                      </td>
                      <td style={{fontWeight:"600"}}>smith@gmail.com</td>
                    </tr>
                    <tr>
                      <td scope="col" style={{ fontWeight: "600" }}>
                        PhoneNumber:
                      </td>
                      <td style={{fontWeight:"600"}}>0334568715</td>
                    </tr>
                    <tr>
                      <td scope="col" style={{ fontWeight: "600" }}>
                        Location:
                      </td>
                      <td style={{fontWeight:"600"}}>Not Available</td>
                    </tr>

                    <tr>
                      <td scope="col" style={{ fontWeight: "600" }}>
                        Gender:
                      </td>
                      <td style={{fontWeight:"600"}}>Male</td>
                    </tr>
                  </tbody>
                </table>
               <Link to={"/adminupdateprofile"}> <p className="edite" style={{textAlign:"justify",fontSize:"20px",fontWeight:"bolder", padding:"20px"}}><i className="fa-solid fa-pen-to-square"></i> Edit</p></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfileCard;