/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// eslint-disable-next-line react/prop-types
const StaffTable = ({ staffMemberList }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="staff table">
        <TableHead>
          <TableRow>
            <TableCell>Staff&nbsp;Name</TableCell>
            <TableCell>Post</TableCell>
            <TableCell align="right">Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staffMemberList.map((staffMember) => (
            <TableRow key={staffMember._id}>
              <TableCell component="th" scope="row">
                {staffMember.name}
              </TableCell>
              <TableCell>{staffMember.post}</TableCell>
              <TableCell align="right">{staffMember.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StaffTable;
