// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/Fitness");
//     console.log("MongoDB Connected ");
//   } catch (error) {
//     console.log(error.message);
    
//   }
// };

// module.exports = connectDB;





const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;