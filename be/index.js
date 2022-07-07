const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routes = require("./routes/index");
let cors = require("cors");

app.use(cors());
app.use("/", routes);

app.listen(5000, () => {
  console.log("listening on 5000");
});
