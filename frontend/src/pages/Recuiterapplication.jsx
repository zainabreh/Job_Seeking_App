import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetRecuiterApplicationQuery } from "../../Redux/auth/application.api";
import { useGetprofileQuery } from "../../Redux/auth/auth.api";



export default function Recuiterapplication() {

  const {data,isLoading} = useGetRecuiterApplicationQuery()
  const {data:profile} = useGetprofileQuery() 
  console.log("recuiter",data); 
  
  if(isLoading){
    return <h1>Loading....</h1>
  }


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
          Man
        </span>
        age
        &nbsp;Applications
      </h3>
      <TableContainer component={Paper}>
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
                sx={{ fontWeight: "700", fontSize: "15px",color:"white" }}
              >
                Company
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "700", fontSize: "15px",color:"white" }}
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
          {data.applications.map((row,index) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index++}
                  </TableCell>
                  <TableCell align="left"><i className="fa-regular fa-eye" style={{fontSize:"20px",padding:"5px",cursor:"pointer",color:"blue"}}></i>   {row.position}</TableCell>
                  <TableCell align="left">{row.companyName}</TableCell>
                  <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">
                <span className="badge text-bg-success">Accept</span>
                <span className="badge text-bg-danger" style={{marginInline:"5px"}}>Reject</span>
                <span className="badge text-bg-warning text-white">Pending</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


