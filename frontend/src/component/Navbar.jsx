import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProfileQuery, useLogoutUserMutation } from "../../Redux/Feature/auth/auth.api";
import { useDispatch, useSelector } from "react-redux";
import { clearUserInfo, setUserInfo } from "../../Redux/Feature/auth/auth.slice";

const Navbar = () => {

  const dispatch = useDispatch()
  const [logoutUser] = useLogoutUserMutation()
  const { data, error, isLoading } = useGetProfileQuery();

  console.log("Data Header",data);

  const {user,isAuthenticated} = useSelector((v)=>v.auth)


const handleLogOut = async ()=>{
  await logoutUser()
  dispatch(clearUserInfo({
    user: null,
    isAuthenticated: false
}))
}


  return (
    <>
      <nav class="navbar bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <Link to={'/'}><div
            class="logo"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "12px",
            }}
          >
            <i
              class="fa-solid fa-briefcase"
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
             <div class="btn-group dropstart">
              <button
                class="btn  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ outline: "none", border: "none", color: "white" }}
              >
                Hi, {user.user.firstname}  {user.user.lastname}
              </button>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                style={{ width: "20px" }}
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Dashboard
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <button class="dropdown-item" onClick={handleLogOut}>
                    LogOut
                  </button>
                </li>
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
