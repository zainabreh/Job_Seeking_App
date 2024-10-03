import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetRecuiterApplicationQuery, useUpdateApplicationStatusMutation } from "../../Redux/auth/application.api";
import { useGetprofileQuery } from "../../Redux/auth/auth.api";
import { useDispatch } from "react-redux";
import { statusUpdation } from "../../Redux/Feature/application.slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";



export default function Recuiterapplication() {

  const {data,isLoading,refetch} = useGetRecuiterApplicationQuery()
  const {data:profile} = useGetprofileQuery() 
  const [updateApplicationStatus] = useUpdateApplicationStatusMutation()
  const dispatch = useDispatch()

  if(isLoading){
    return <h1>Loading....</h1>
  }

  console.log("recuiter data..........",Array.isArray(data.applications));
  

  const currentUserId = profile.user._id;
  const filteredApplications = Array.isArray(data.applications) 
    ? data.applications.filter(application => application.recuiter_id.user === currentUserId) 
    : []; 
    
    console.log("recuitervvvvvvvvvvv",filteredApplications);
    
    

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

  // const handleStatusUpdation = async(id,newstatus)=>{
  //   console.log("id",id,"newstatus",newstatus);
    
  //   try {
  //     const updatejob = await updateApplicationStatus({id:id,status:newstatus})
  //     console.log("status updation",updatejob.data.updateApplication);
  //     dispatch(statusUpdation(updatejob.data.updateApplication))
  //     refetch()

  //     if(updatejob.data.success === false){
  //       toast.error(updatejob.data.message)
  //     }
      
  //   } catch (error) {
  //     console.error("Failed to update status")
  //   }
  // }
  
  React.useEffect(()=>{
    refetch()
  },[])


  return (
    <div className="table-container container" style={{color:"white"}}>
      <ToastContainer />
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
                <span className="badge text-bg-success" onClick={()=>handleStatusUpdation(row._id,'accept')}>Accept</span>
                <span className="badge text-bg-danger" style={{marginInline:"5px"}}onClick={()=>handleStatusUpdation(row._id,'reject')}>Reject</span>
                <span className="badge text-bg-warning text-white" onClick={()=>handleStatusUpdation(row._id,'pending')}>Pending</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


