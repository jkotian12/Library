import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";

export default function Books(books) {
  return (
    <div>
      <h1>Books available the Library</h1>
      <TableContainer>
        <Table style={{ border: "1px solid black" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderRight: "1px solid black",
                }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{
                  borderRight: "1px solid black",
                }}
              >
                Author
              </TableCell>
              <TableCell
                sx={{
                  borderRight: "1px solid black",
                }}
              >
                Borrowed by
              </TableCell>
              <TableCell
                sx={{
                  borderRight: "1px solid black",
                }}
              >
                Date Borrowed
              </TableCell>
              <TableCell>Return Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.books &&
              books.books.map((ele) => {
                return (
                  <TableRow key={ele.id}>
                    <TableCell
                      sx={{
                        borderRight: "1px solid black",
                      }}
                    >
                      {ele.title}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "1px solid black",
                      }}
                    >
                      {ele.author}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "1px solid black",
                      }}
                    >
                      {ele.borrowed_by}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "1px solid black",
                      }}
                    >
                      {ele.date_borrowed.slice(0, 10)}
                    </TableCell>
                    <TableCell>{ele.return_date.slice(0, 10)}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" href="/newbook">
        Add a Book
      </Button>
    </div>
  );
}
