import { React } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";

export default function Students({ students }) {
  return (
    <div>
      <h1>Students registered at the Library</h1>
      <TableContainer>
        <Table style={{ border: "1px solid black" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderRight: "1px solid black",
                }}
              >
                First Name
              </TableCell>
              <TableCell>Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students &&
              students.map((ele) => {
                return (
                  <TableRow key={ele.id}>
                    <TableCell
                      sx={{
                        borderRight: "1px solid black",
                      }}
                    >
                      {ele.first_name}
                    </TableCell>
                    <TableCell>{ele.last_name}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" href="/newstudent">
        Add a Student
      </Button>
    </div>
  );
}
