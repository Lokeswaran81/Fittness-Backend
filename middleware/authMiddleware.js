// const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel");

// const protect = async (req, res, next) => {
//   const token = req.cookies?.token;

//   if (!token) {
//     return res.status(401).json({ message: "No token" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(decoded);

//     const user = await userModel.findById(decoded.id);

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     req.user = user;
//     next(); 

//   } catch (error) {
//     console.log(error.message);

//     return res.status(401).json({
//       success: false,
//       message: "Invalid token",
//     });
//   }
// };

// module.exports = protect;

const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// check login token
const protect = async (req, res, next) => {
  try {
    let token = null;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, token missing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id).select("-passWord");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Auth error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Not authorized, invalid token",
    });
  }
};

// check admin role
const adminOnly = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admin only.",
    });
  }

  next();
};

module.exports = { protect, adminOnly };
