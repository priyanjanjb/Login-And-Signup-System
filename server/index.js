const express = require("express");
const cors = require("cors");
const axios = require("axios");

//middleware
const app = express();
app.use(cors());

app.use(express.json());

//routes
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});

app.get("/api", (req, res) => {
  res.send("Hello World!");
  console.log("Hello World!");
});
