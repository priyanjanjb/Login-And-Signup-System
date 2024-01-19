const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const axios = require("axios"); //send http request
const bodyParser = require("body-parser"); //parse json data
const mongoose = require("mongoose");
const route = require("./routes/carelabelRoutes");
require("dotenv").config();
console.log(process.env.MONGO_DB_URI);

// const mongoDbUrl =
//   "mongodb+srv://priyanjanjb:v5eueYJfiBlVvU12@carelabel.gdkbswt.mongodb.net/Carelabel";
const app = express();
const PORT = 5000;

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

//connect to mongodb
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("Not Connected to Db", err);
  });

// Routes
app.get("/", async (req, res) => {
  res.send("Hello World");
});
app.use("/route", route);

//listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
