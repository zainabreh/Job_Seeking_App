import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(No, position, company, status) {
  return { No, position, company, status };
}

const rows = [
  createData(0o1, "Web Developer", "Microsoft", "Pending"),
  createData(0o2, "Software Engineering", "Tesla", "Pending"),
];

export default function Recuiterapplication() {
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
            {rows.map((row) => (
              <TableRow
                key={row.No}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.No}
                </TableCell>
                <TableCell align="left">{row.position}</TableCell>
                <TableCell align="left">{row.company}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">
                <i class="fa-regular fa-eye" style={{fontSize:"20px",padding:"5px",cursor:"pointer",color:"blue"}}></i>
                <i class="fa-solid fa-pen-to-square" style={{fontSize:"20px",padding:"5px",cursor:"pointer",color:"green"}}></i>
                <i class="fa-solid fa-trash" style={{fontSize:"20px",padding:"5px",cursor:"pointer",color:"red"}}></i>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


