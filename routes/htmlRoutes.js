const router = require("express").Router();
const path = require("path");
require("dotenv").config();

//placeholder for connection to database
const db = mysql.createConnection(
  process.env.DB_NAME,
  process.env.DB_PASSWORD,
  process.env.DB_USER,
  { host: "127.0.0.1" }
);

// HTML ROUTES
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

module.exports = router;
