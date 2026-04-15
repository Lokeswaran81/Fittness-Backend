// const userModel = require("../models/userModel");

// const login = (req, res) => {
//   const { email, password } = req.body;
//   if (!email) {
//     return res.json({
//       success: false,
//       message: "email is required",
//     });
//   }
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!emailRegex.test(email)) {
//     return res.json({
//       success: false,
//       message: "Invalid email format",
//     });
//   }

//   if (!password) {
//     return res.json({
//       success: false,
//       message: "password is required",
//     });
//   }
//   if (password.length < 6) {
//     return res.json({
//       success: false,
//       message: "Password must be at least 6 characters",
//     });
//   }
//   return res.json({
//     success: true,
//     email,
//     password,
//   });
// };
// // ---------------sign up------------------//
// const signUp = async (req, res) => {
//   try {
//     const { fullName, emailAddress, phoneNumber, passWord, confirmPassword } =
//       req.body;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!fullName) {
//       return res.json({
//         success: false,
//         message: "fullName is required",
//       });
//     }
//     if (fullName.length <= 3 || fullName.length >= 12) {
//       return res.json({
//         success: false,
//         message: "fullName must be at least 3 to maximum of 12 characters",
//       });
//     }
//     if (!emailAddress) {
//       return res.json({
//         success: false,
//         message: "emailAddress is required",
//       });
//     }
//     if (!emailRegex.test(emailAddress)) {
//       return res.json({
//         success: false,
//         message: "Invalid email format",
//       });
//     }
//     if (!phoneNumber) {
//       return res.json({
//         success: false,
//         message: "PhoneNumber is required",
//       });
//     }
//     if (phoneNumber.toString().length != 10) {
//       return res.json({
//         success: false,
//         message: "Phone number must be 10 digits",
//       });
//     }
//    if (!passWord) {
//       return res.json({
//         success: false,
//         message: "passWord is required",
//       });
//     }
//     if (passWord.length < 6) {
//       return res.json({
//         success: false,
//         message: "passWord must be at least 6 characters",
//       });
//     }
//     console.log(confirmPassword);
//         success: false,

//     if (!confirmPassword) {
//       return res.json({
//         message: "confirmpassWord is required",
//       });
//     }
//     if (passWord !== confirmPassword) {
//       return res.json({
//         success: false,
//         message: "passWords do not match",
//       });
//     }
//     const user = await userModel.create({
//       fullName,
//       emailAddress,
//       phoneNumber,
//       passWord,
//       confirmPassword,
//     });
//     if (user) {
//       return res.json({
//         success: true,
//         message: "signnup Succeessfull",
//         user
//       });
//     }
//     return res.json({
//       success: false,
//       message: "can`t signup",
//     });
//   } catch (error) {
//     return res.json({
//       success: false,
//       message: "error from signup",
//       error: error.message,
//     });
//   }
// };
// module.exports = { login, signUp };

// const jwt = require("jsonwebtoken");

// const bcrypt = require("bcryptjs");
// const userModel = require("../models/userModel");

// // ---------------- LOGIN ----------------
// const login = async (req, res) => {
//   try {
//     const { emailAddress, passWord } = req.body;

//     if (!emailAddress) {
//       return res.status(400).json({
//         success: false,
//         message: "Email is required",
//       });
//     }

//     if (!passWord) {
//       return res.status(400).json({
//         success: false,
//         message: "Password is required",
//       });
//     }

//     const user = await userModel.findOne({ emailAddress });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     const isMatch = await bcrypt.compare(passWord, user.passWord);

//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid password",
//       });
//     }
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false, 
//       sameSite: "lax", 
//     }).status(200).json({
//       success: true,
//       message: "Login successful",
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         emailAddress: user.emailAddress,
//         phoneNumber: user.phoneNumber,
//       },
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Login error",
//       error: error.message,
//     });
//   }
// };

// // ---------------- SIGNUP ----------------
// const signUp = async (req, res) => {
//   try {
//     const { fullName, emailAddress, phoneNumber, passWord, confirmPassword } =
//       req.body;
//     console.log(confirmPassword);

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!fullName) {
//       return res.status(400).json({
//         success: false,
//         message: "Full name is required",
//       });
//     }

//     if (fullName.length < 3 || fullName.length > 20) {
//       return res.status(400).json({
//         success: false,
//         message: "Full name must be 3 to 20 characters",
//       });
//     }

//     if (!emailAddress) {
//       return res.status(400).json({
//         success: false,
//         message: "Email is required",
//       });
//     }

//     if (!emailRegex.test(emailAddress)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid email format",
//       });
//     }

//     if (!phoneNumber) {
//       return res.status(400).json({
//         success: false,
//         message: "Phone number is required",
//       });
//     }

//     if (phoneNumber.toString().length !== 10) {
//       return res.status(400).json({
//         success: false,
//         message: "Phone number must be exactly 10 digits",
//       });
//     }

//     if (!passWord) {
//       return res.status(400).json({
//         success: false,
//         message: "Password is required",
//       });
//     }

//     if (passWord.length < 6) {
//       return res.status(400).json({
//         success: false,
//         message: "Password must be at least 6 characters",
//       });
//     }

//     if (!confirmPassword) {
//       return res.status(400).json({
//         success: false,
//         message: "Confirm password is required",
//       });
//     }
//     console.log(passWord == confirmPassword);

//     if (passWord != confirmPassword) {
//       return res.status(400).json({
//         success: false,
//         message: "Passwords do not match",
//       });
//     }

//     const existingUser = await userModel.findOne({
//       $or: [{ emailAddress }, { phoneNumber }, { fullName }],
//     });

//     console.log("is user", existingUser);

//     if (existingUser) {
//       return res.status(409).json({
//         success: false,
//         message:
//           "User already exists with this email or phone number or UserName",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(passWord, 10);

//     const user = await userModel.create({
//       fullName,
//       emailAddress,
//       phoneNumber,
//       passWord: hashedPassword,
//     });

//     console.log(user);

//     return res.status(201).json({
//       success: true,
//       message: "Signup successful",
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         emailAddress: user.emailAddress,
//         phoneNumber: user.phoneNumber,
//       },
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Signup error",
//       error: error.message,
//     });
//   }
// };
// const logout = (req, res) => {
//   res.clearCookie("token");
//   res.json({ success: true, message: "Logout successful" });
// };

// const profile = async (req, res) => {
//   console.log(req.user)
//   if (req.user) {
//     return res.json({
//       success: true,
//       user: req.user,
//     });
//   }
//   return res.json({
//     success: false,
//     message: "continue with login",
//   });
// };
// module.exports = { login, signUp, logout, profile };




const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");

// ================= TOKEN GENERATOR =================
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      emailAddress: user.emailAddress,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// ================= LOGIN =================
const login = async (req, res) => {
  try {
    const { emailAddress, passWord } = req.body;

    if (!emailAddress) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    if (!passWord) {
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });
    }

    const user = await userModel.findOne({ emailAddress });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(passWord, user.passWord);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // 🔥 NEW TOKEN WITH ROLE
    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token, // 🔥 send token to frontend
      user: {
        id: user._id,
        fullName: user.fullName,
        emailAddress: user.emailAddress,
        phoneNumber: user.phoneNumber,
        role: user.role, // 🔥 VERY IMPORTANT
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login error",
      error: error.message,
    });
  }
};

// ================= SIGNUP =================
const signUp = async (req, res) => {
  try {
    const { fullName, emailAddress, phoneNumber, passWord, confirmPassword } =
      req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName) {
      return res.status(400).json({
        success: false,
        message: "Full name is required",
      });
    }

    if (fullName.length < 3 || fullName.length > 20) {
      return res.status(400).json({
        success: false,
        message: "Full name must be 3 to 20 characters",
      });
    }

    if (!emailAddress) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    if (!emailRegex.test(emailAddress)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    if (!phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required",
      });
    }

    if (phoneNumber.toString().length !== 10) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be exactly 10 digits",
      });
    }

    if (!passWord) {
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });
    }

    if (passWord.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    if (!confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Confirm password is required",
      });
    }

    if (passWord != confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const existingUser = await userModel.findOne({
      $or: [{ emailAddress }, { phoneNumber }],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(passWord, 10);

    const user = await userModel.create({
      fullName,
      emailAddress,
      phoneNumber,
      passWord: hashedPassword,
      role: "user", // 🔥 default role
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        emailAddress: user.emailAddress,
        phoneNumber: user.phoneNumber,
        role: user.role,
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Signup error",
      error: error.message,
    });
  }
};

// ================= LOGOUT =================
const logout = (req, res) => {
  return res.json({
    success: true,
    message: "Logout successful",
  });
};

// ================= PROFILE =================
const profile = async (req, res) => {
  try {
    if (req.user) {
      return res.json({
        success: true,
        user: req.user,
      });
    }

    return res.json({
      success: false,
      message: "Please login",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Profile error",
      error: error.message,
    });
  }
};

module.exports = { login, signUp, logout, profile };
