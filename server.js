// DEPENDENCIES
const express = require("express");
const routes = require("./routes/index.js");
const mysql = require("mysql2");
const path = require("path");
require("dotenv").config();
// DATA

// APP/PORT
const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.json());

const db = mysql.createConnection(
  process.env.DB_NAME,
  process.env.DB_PASSWORD,
  process.env.DB_USER,
  { host: "127.0.0.1" }
);

// ROUTES
app.use(routes);

app.get("/api/movies", (req, res) =>
  db.query("SELECT * FROM movies", function (err, results) {
    console.log(results);
    res.json(results);
  })
);

app.get("*", (req, res) =>
  res.send(
    "You need to add some routes if this thing is going to mean anything."
  )
);

// START THE SERVER
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
