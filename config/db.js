const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/Fitness");
  console.log("MongoDB Connected ");
};

module.exports = connectDB;