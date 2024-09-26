import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetMyJobsQuery } from "../../Redux/auth/job.api";
import { useNavigate } from "react-router-dom";
import Addjob from "./Addjob";

export default function Managejob() {
  const navigate = useNavigate()
  const {data,isLoading} = useGetMyJobsQuery()
  
  if(isLoading){
    return <h1>Loading.....</h1>
  }

  if(data.myjobs.length === 0 ){
    return <h1 style={{
      textAlign: "center",
      marginTop: "30%",
      fontSize: "36px",
      fontWeight: "bold",
      color: "#333",
      textShadow: "2px 2px 4px #ccc",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out"
    }}>You have Not Posted Any Jobs</h1>
  }

  const handleUpdateJob = (newJob)=>{
    return (
      <Addjob mode="updatejob" job={newJob}/>
    )
    
  }
  
  return (
    <div className="container">
      
      <h2 style={{textAlign:"center",marginBlock:"20px",fontWeight:"600",color:"white"}}>Manage Job</h2>
        
        <TableContainer component={Paper} sx={{marginBlock:"30px"}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{backgroundColor:"#0d47a1"}}>
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
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.myjobs.map((row,index) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index++}
                  </TableCell>
                  <TableCell align="left">{row.position}</TableCell>
                  <TableCell align="left">{row.company}</TableCell>
                  <TableCell align="left">
                  <i className="fa-regular fa-eye" style={{fontSize:"20px",padding:"5px",cursor:"pointer",color:"blue"}}></i>
                  <i className="fa-solid fa-pen-to-square" style={{fontSize:"20px",padding:"5px",cursor:"pointer",color:"green"}} onClick={()=>{
                    handleUpdateJob(row)
                    navigate('/recuiter/addjob')                    
                    }}></i>
                  <i className="fa-solid fa-trash" style={{fontSize:"20px",padding:"5px",cursor:"pointer",color:"red"}}></i>
                  </TableCell>
                </TableRow>
              ))} 
            </TableBody>
          </Table>
        </TableContainer>
     
    </div>
    );
}
