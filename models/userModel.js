const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        unique:true,
    },
    emailAddress:{
        type:String,
        required:true,
        unique:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true,
    },
    passWord:{
        type:String,
        required:true,
        unique:true,
    },
    confirmPassword:{
        type:String,
        required:true,
        unique:true,
    }
})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel