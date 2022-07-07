import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Library from "./components/Library";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from "./components/Students";
import Books from "./components/Books";
import axios from "axios";
import { useState, useEffect } from "react";
import AddBook from "./components/AddBook";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      axios
        .get("http://localhost:5000/students")
        .then((res) => {
          setStudents([res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getBooks = async () => {
      axios
        .get("http://localhost:5000/books")
        .then((res) => {
          setBooks([res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getStudents();
    getBooks();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={<Library students={students[0]} books={books[0]} />}
          />
          <Route
            exact
            path="/students"
            element={<Students students={students[0]} />}
          />
          <Route exact path="/books" element={<Books books={books[0]} />} />
          <Route
            exact
            path="/newBook"
            element={<AddBook students={students[0]} />}
          ></Route>
          <Route exact path="/newstudent" element={<AddStudent />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
