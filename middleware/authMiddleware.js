const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const protect = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    next(); 

  } catch (error) {
    console.log(error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = protect;
