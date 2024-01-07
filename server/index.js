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

app.get("/Login", (req, res) => {
  req.query;
  res.send("succesful login with authentication");
  console.log("succesful login with authentication");
});

app.get("/caredata", (req, res) => {
  const { strkNum, cntrkNum, season, tdeptNum } = req.query;
  console.log(strkNum, cntrkNum, season, tdeptNum);
  res.send("succesful Submitting of care data");
});
