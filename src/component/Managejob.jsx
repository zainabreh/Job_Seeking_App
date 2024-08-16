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
  createData(0o1, "Web Developer", "Microsoft", "Recuiter1",<i class="fa-regular fa-eye">E</i>,<i class="fa-solid fa-trash">D</i>,<i class="fa-solid fa-pen-to-square">E</i>),
  createData(0o2, "Software Engineering", "Tesla", "Recuiter2",<i class="fa-regular fa-eye">E</i>,<i class="fa-solid fa-trash">D</i>,<i class="fa-solid fa-pen-to-square">E</i>),
];

export default function Managejob() {
  return (
    <div className="table-container">
      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "700", fontSize: "15px" }}>
                #
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "700", fontSize: "15px" }}
              >
                Job Postion
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "700", fontSize: "15px" }}
              >
                Company
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "700", fontSize: "15px" }}
              >
                Created By
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "700", fontSize: "15px" }}
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
