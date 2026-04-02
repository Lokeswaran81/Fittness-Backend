const userModel = require("../models/userModel");

const login = (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.json({
      success: false,
      message: "email is required",
    });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.json({
      success: false,
      message: "Invalid email format",
    });
  }

  if (!password) {
    return res.json({
      success: false,
      message: "password is required",
    });
  }
  if (password.length < 6) {
    return res.json({
      success: false,
      message: "Password must be at least 6 characters",
    });
  }
  return res.json({
    success: true,
    email,
    password,
  });
};
// ---------------sign up------------------//
const signUp = async (req, res) => {
  try {
    const { fullName, emailAddress, phoneNumber, passWord, confirmPassword } =
      req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName) {
      return res.json({
        success: false,
        message: "fullName is required",
      });
    }
    if (fullName.length <= 3 && fullName.length >= 12) {
      return res.json({
        success: false,
        message: "fullName must be at least 3 to maximum of 12 characters",
      });
    }
    if (!emailAddress) {
      return res.json({
        success: false,
        message: "emailAddress is required",
      });
    }
    if (!emailRegex.test(emailAddress)) {
      return res.json({
        success: false,
        message: "Invalid email format",
      });
    }
    if (!phoneNumber) {
      return res.json({
        success: false,
        message: "PhoneNumber is required",
      });
    }

    if (phoneNumber.toString().length != 10) {
      return res.json({
        success: false,
        message: "Phone number must be 10 digits",
      });
    }
    if (passWord.length < 6) {
      return res.json({
        success: false,
        message: "passWord must be at least 6 characters",
      });
    }
    if (!passWord) {
      return res.json({
        success: false,
        message: "passWord is required",
      });
    }
    console.log(confirmPassword);

    if (!confirmPassword) {
      return res.json({
        success: false,
        message: "confirmpassWord is required",
      });
    }
    if (passWord !== confirmPassword) {
      return res.json({
        success: false,
        message: "passWords do not match",
      });
    }
    const user = await userModel.create({
      fullName,
      emailAddress,
      phoneNumber,
      passWord,
      confirmPassword,
    });
    if (user) {
      return res.json({
        success: true,
        message: "signnup Succeessfull",
        user
      });
    }
    return res.json({
      success: false,
      message: "can`t signup",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "error from signup",
      error: error.message,
    });
  }
};
module.exports = { login, signUp };
