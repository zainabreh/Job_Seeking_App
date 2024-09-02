import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">

  <ul className="nav flex-column short-sidebar">
  {/* <li className="nav-item">
    <div>
    <i className="fa-solid fa-user" style={{fontSize:"60px",textAlign:"center",marginInline:"10px",marginBlock:"10px"
    }}></i>
    <p className="nav-list" aria-current="page">UserName</p>

    </div>
  </li> */}

  {/* <li className="nav-item">
    <div>
    <i className="fa-solid fa-user" style={{fontSize:"60px",textAlign:"center",marginInline:"10px",marginBlock:"10px"
    }}></i>
    <p className="nav-list" aria-current="page">RecuiterName</p>

    </div>
  </li> */}

  <li className="nav-item">
    <div>
    <i className="fa-solid fa-user" style={{fontSize:"60px",textAlign:"center",marginInline:"10px",marginBlock:"10px"
    }}></i>
    <p className="nav-list" aria-current="page">AdminName</p>

    </div>
  </li>
  <hr/>

  <li className="nav-item">
  <Link to={"/usepProfileCard"}>
  <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",color:"white"
  }}>

  <i className="fa-regular fa-user" style={{fontSize:"20px"}}></i>
    <p className="nav-list" style={{margin:"5px",fontWeight:"700",color:"white"}}>Profile</p>
  </div>
  </Link>
  </li>
  <li className="nav-item">
  <Link to={"/recuiterProfileCard"}>
  <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",color:"white"
  }}>

  <i className="fa-regular fa-user" style={{fontSize:"20px"}}></i>
    <p className="nav-list" style={{margin:"5px",fontWeight:"700",color:"white"}}>Profile</p>
  </div>
  </Link>
  </li>
  
  <li className="nav-item">
  <Link to={"/userapplication"}>
  <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",color:"white"
  }}>

  <i className="fa-solid fa-briefcase" style={{fontSize:"20px"}}></i>
    <p className="nav-list" style={{margin:"5px",fontWeight:"700",color:"white"}}>Applications</p>
  </div>
  </Link>
  </li>
  <li className="nav-item">
  <Link to={"/recuiterapplication"}>
  <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",color:"white"
  }}>

  <i className="fa-solid fa-briefcase" style={{fontSize:"20px"}}></i>
    <p className="nav-list" style={{margin:"5px",fontWeight:"700",color:"white"}}>Applications</p>
  </div>
  </Link>
  </li>


  <li className="nav-item">
  <Link to={"/addjob"}>
  <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",color:"white"
  }}>

<i className="fa-regular fa-square-plus" style={{fontSize:"20px"}}></i>
    <p className="nav-list" style={{margin:"5px",fontWeight:"700",color:"white"}}>Add Job</p>
  </div>
  </Link>
  </li>


  <li className="nav-item">
  <Link to={"/manageJobs"}>
  <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",color:"white"
  }}>
  <i className="fa-solid fa-user-gear" style={{fontSize:"20px"}}></i>
    <p className="nav-list" style={{margin:"5px",fontWeight:"700",color:"white"}}>Manage Jobs</p>
  </div>
  </Link>
  </li>



  <li className="nav-item">
  <Link to={"/manageUsers"}>
  <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",color:"white"
  }}>
  <i className="fa-solid fa-user-gear" style={{fontSize:"20px"}}></i>
    <p className="nav-list" style={{margin:"5px",fontWeight:"700",color:"white"}}>Manage Users</p>
  </div>
  </Link>
  </li>




  <li className="nav-item">
  <Link to={"/adminprofilecard"}>
  <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",color:"white"
  }}>

  <i className="fa-regular fa-user" style={{fontSize:"20px"}}></i>
    <p className="nav-list" style={{margin:"5px",fontWeight:"700",color:"white"}}>Profile</p>
  </div>
  </Link>
  </li>


  <li className="nav-item">
  <Link to={"/admin"}>
  <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",color:"white"
  }}>

  <i className="fa-regular fa-user" style={{fontSize:"20px"}}></i>
    <p className="nav-list" style={{margin:"5px",fontWeight:"700",color:"white"}}>Admin</p>
  </div>
  </Link>
  </li>

  
</ul>
    </div>
    </>
  );
};

export default Sidebar;
