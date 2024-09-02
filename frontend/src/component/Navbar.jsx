import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetprofileQuery, useLazyLogoutUserQuery } from "../../Redux/auth/auth.api";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {isLoading} = useGetprofileQuery()
  const {user,isAuthenticated} = useSelector((v)=>v.auth)
  
  const [logoutUser,{data}] = useLazyLogoutUserQuery()

const handleLogOut = async ()=>{
  await logoutUser()
}


  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to={'/'}><div
            className="logo"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "12px",
            }}
          >
            <i
              className="fa-solid fa-briefcase"
              style={{ fontSize: "20px", color: "white" }}
            ></i>
            &nbsp;&nbsp;
            <span
              style={{
                fontSize: "25px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Jobs
            </span>
          </div></Link>
          {
            isAuthenticated ?
             <div className="btn-group dropstart">
              <button
                className="btn  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ outline: "none", border: "none", color: "white" }}
              >
                 Hi, {user?.user?.firstname}  {user?.user?.lastname} 
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                style={{ width: "20px" }}
              >
                <li>
                  <Link to={'userdashboard'} className="dropdown-item">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <Link to={'/'}>
                <li>
                  <button className="dropdown-item" onClick={handleLogOut}>
                    LogOut
                  </button>
                </li>
                </Link>
              </ul>
            </div> 
            : 
          <div>
            <Link to={"/login"}>
              <h5 style={{ fontWeight: "600", color: "white" }}>LogIn</h5>
            </Link>
          </div>
          }
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
