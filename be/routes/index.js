const express = require("express");
const Router = express.Router();
const db = require("../db/db");

Router.get("/students", async (req, res) => {
  const students = await db("student").select("*").from("student");
  res.json(students);
});
Router.get("/books", async function (req, res) {
  const books = await db("book").select("*").from("book");
  res.json(books);
});
Router.post("/students", async function (req, res) {
  const { first_name, last_name } = req.body;
  await db("student").insert({
    first_name: first_name,
    last_name: last_name,
  });
});
Router.post("/books", async function (req, res) {
  const { title, author, borrowed_by, date_borrowed, return_date } = req.body;
  await db("book").insert({
    title,
    author,
    borrowed_by,
    date_borrowed,
    return_date,
  });
});
module.exports = Router;
