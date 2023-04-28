const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "registration",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database");
});

app.post("/users", async (req, res) => {
  const formData = req.body;
  const sql = "INSERT INTO users SET ?";
  connection.query(sql, formData, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("User registered successfully");
  });
});

app.get("/users", async (req, res) => {
  const sql = "SELECT * from users";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
