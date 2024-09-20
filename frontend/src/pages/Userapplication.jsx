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
import { useSelector } from "react-redux";

function createData(No, position, company, status) {
  return { No, position, company, status };
}

export default function Userapplication() {
  const {data,error,isLoading} = useGetUserApplicationQuery()
  const {data:profile} = useGetprofileQuery() 
  const [valid,setValid] = React.useState()
  const [nothing,setNothing] = React.useState()

  const applications = useSelector((v)=>v.application.userApplication)
  console.log("Applications...",applications);
  
  
  if(isLoading){
    return <h1>Loading....</h1>
  }

  // const currentUserId = profile.user._id;
  // const filteredApplications = Array.isArray(data.applications) 
  //   ? data.applications.filter(application => application.applicant_id.user === currentUserId) 
  //   : [];

  // if (filteredApplications.length === 0) {
  //   return <h1>No Applications Found</h1>;
  // }

  
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

            {/* {
              filteredApplications.map((v,index)=>(
                <TableRow
                key={v.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index++}
                </TableCell>
                <TableCell align="left">{v.position}</TableCell>
                <TableCell align="left">{v.companyName}</TableCell>
                <TableCell align="left">{v.status}</TableCell>
                <TableCell align="left">
                  <i className="fa-solid fa-pen-to-square" style={{fontSize:"20px",padding:"5px",cursor:"pointer",color:"green"}}></i>
                  <i className="fa-solid fa-trash" style={{fontSize:"20px",padding:"5px",cursor:"pointer",color:"red"}}></i>
                  </TableCell>
              </TableRow>
              ))
            } */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
