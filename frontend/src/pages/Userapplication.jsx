import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetUserApplicationQuery } from "../../Redux/auth/application.api";
import { useGetprofileQuery } from "../../Redux/auth/auth.api";
import { useDispatch, useSelector } from "react-redux";

function createData(No, position, company, status) {
  return { No, position, company, status };
}

export default function Userapplication() {
  const {data:profile} = useGetprofileQuery() 
  const {data,error,isLoading,refetch} = useGetUserApplicationQuery()

  console.log("useGetUserApplicationQuery.........",data);
  

  const applications = useSelector((v)=>v.application.userApplication)

  console.log("Applications...",applications[1].data.application);  
  
  if(isLoading){
    return <h1>Loading....</h1>
  }
  
  const currentUserId = profile.user._id;


  console.log("Applications...checking equality",applications[1].data.application.applicant_id.user === currentUserId);
  
  console.log("Applications...",applications.filter(application => application.data.application.applicant_id.user === currentUserId));  

  const filteredApplications = Array.isArray(applications) 
    ? applications.filter(application => application.data.application.applicant_id.user === currentUserId) 
    : [];  
    
    console.log("filteredApplications.........",filteredApplications);
    
    

  if (filteredApplications.length === 0) {
    return <h1 style={{
      textAlign: "center",
      marginTop: "30%",
      fontSize: "36px",
      fontWeight: "bold",
      color: "#333",
      textShadow: "2px 2px 4px #ccc",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out"
    }}>No Applications Found</h1>
  }
  
  React.useEffect(()=>{
    refetch()
  },[])
  return (
    <div className="table-container container" style={{color:"white"}}>
      
      <h3 style={{ marginBlock: "15px" }}>
        <span
          style={{
            textDecoration: "underline",
            textDecorationColor: "white",
            textDecorationThickness: "3px",
          }}
        >
          My
        </span>
        &nbsp;Applications
      </h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead  sx={{backgroundColor:"#0d47a1"}}>
            <TableRow>
              <TableCell sx={{ fontWeight: "700", fontSize: "15px" ,color:"white"}}>
                #
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "700", fontSize: "15px" ,color:"white"}}
              >
                Job Postion
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "700", fontSize: "15px" ,color:"white"}}
              >
                Company
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "700", fontSize: "15px" ,color:"white"}}
              >
                Status
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "700", fontSize: "15px" ,color:"white"}}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

             {
              filteredApplications.map((v,index)=>(
                <TableRow
                key={v.data.application._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index++}
                </TableCell>
                <TableCell align="left">{v.data.application.position}</TableCell>
                <TableCell align="left">{v.data.application.companyName}</TableCell>
                <TableCell align="left">{v.data.application.status}</TableCell>
                <TableCell align="left">
                  <i className="fa-solid fa-pen-to-square" style={{fontSize:"20px",padding:"5px",cursor:"pointer",color:"green"}}></i>
                  <i className="fa-solid fa-trash" style={{fontSize:"20px",padding:"5px",cursor:"pointer",color:"red"}}></i>
                  </TableCell>
              </TableRow>
              ))
            } 
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
