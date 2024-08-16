import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">

  <ul class="nav flex-column">
  <li class="nav-item">
    <div>
    <i class="fa-solid fa-user" style={{fontSize:"60px",textAlign:"center",marginInline:"10px",marginBlock:"10px"
    }}></i>
    <p class="nav-list" aria-current="page">Username</p>

    </div>
  </li>
  <hr/>
  <Link to={"/usepProfileCard"}>
  <li class="nav-item" style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",color:"white"
  }}>
  <i class="fa-regular fa-user" style={{fontSize:"20px"}}></i>
    <p class="nav-list" style={{margin:"5px",fontWeight:"700",color:"white"}}>Profile</p>
  </li>
  </Link>
  
  <Link to={"/userapplication"}>
  <li class="nav-item" style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",color:"white"
  }}>
  <i class="fa-solid fa-briefcase" style={{fontSize:"20px"}}></i>
    <p class="nav-list" style={{margin:"5px",fontWeight:"700",color:"white"}}>Applications</p>
  </li>
  </Link>
  
</ul>
    </div>
    </>
  );
};

export default Sidebar;
