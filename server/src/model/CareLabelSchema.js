const mongoose = require("mongoose");

const carelabelSchema = new mongoose.Schema({
  strnum: {
    type: Number,
    required: true,
  },
  contrctNum: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  tdept: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Carelabel", carelabelSchema);
