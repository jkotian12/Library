import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

export default function AddStudent() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSubmit = (e) => {
    console.log("submit");
    axios
      .post("http://localhost:5000/students", {
        first_name: fname,
        last_name: lname,
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
      <form style={{ marginTop: "150px" }}>
        <label>First Name</label>
        <input
          required
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <Button variant="contained" href="/students">
        Back to student list
      </Button>
    </div>
  );
}
