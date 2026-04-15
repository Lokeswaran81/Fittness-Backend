// const mongoose = require("mongoose");
// const userSchema = mongoose.Schema({
//     fullName:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     emailAddress:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     phoneNumber:{
//         type:Number,
//         required:true,
//         unique:true,
//     },
//     passWord:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     confirmPassword:{
//         type:String,
//         required:true,
//         unique:true,
//     }
// })

// const userModel = mongoose.model("user",userSchema);

// module.exports = userModel



// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   emailAddress: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//     trim: true,
//   },
//   phoneNumber: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   passWord: {
//     type: String,
//     required: true,
//   },
// }, { timestamps: true });

// module.exports = mongoose.model("User", userSchema);





const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    emailAddress: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    passWord: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;