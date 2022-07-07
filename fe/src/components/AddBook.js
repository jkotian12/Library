import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

export default function AddBook({ students }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bDate, setBDate] = useState("");
  const [rDate, setRDate] = useState("");
  const [student, setStudent] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("submit");
    axios
      .post("http://localhost:5000/books", {
        title: title,
        author: author,
        borrowed_by: student,
        date_borrowed: bDate,
        return_date: rDate,
      })
      .then(() => {
        console.log("works");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <label>Title</label>
        <input
          required
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author</label>
        <input
          required
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Borrowed by:</label>
        <select onChange={(e) => setStudent(e.target.value)}>
          <option value="none">Not Borrowed</option>
          {students &&
            students.map((ele, index) => {
              return (
                <option value={ele.first_name} key={index}>
                  {ele.first_name}
                </option>
              );
            })}
        </select>
        <label>Date of Borrow</label>
        <input
          required
          id="borrowDate"
          type="date"
          value={bDate}
          onChange={(e) => setBDate(e.target.value)}
        />
        <label>Expected Date of Return</label>
        <input
          required
          id="returnDate"
          type="date"
          value={rDate}
          onChange={(e) => setRDate(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <Button variant="contained" href="/books">
        Back to Book list
      </Button>
    </div>
  );
}
