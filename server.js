const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// GET REQUEST
app.get("/", (req, res) => {
  res.send("Hello World");
});

// ****** SERVER ********************************
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Listening on port ${port}......`);
});
