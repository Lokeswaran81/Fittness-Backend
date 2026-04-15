// const express = require('express')
// const { login, signUp } = require('../Controllers/authController')

// const authRoutes = express.Router()

// authRoutes.route("/login").get(login)
// authRoutes.route("/signUp").post(signUp)

// module.exports = authRoutes

// const express = require("express");

// const protect = require("../middleware/authMiddleware.js")

// const { login, signUp, logout,profile } = require("../Controllers/authController.js");

// const authRoutes = express.Router();

// authRoutes.post("/login", login);
// authRoutes.post("/signup", signUp);
// authRoutes.post("/logout", logout);
// authRoutes.get("/profile",protect,profile)

// module.exports = authRoutes;


const express = require("express");
const { login, signUp, logout, profile } = require("../Controllers/authController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/signup", signUp);
authRoutes.post("/logout", logout);

// test logged-in user
authRoutes.get("/profile", protect, profile);

// test admin-only access
authRoutes.get("/admin-test", protect, adminOnly, (req, res) => {
  res.json({
    success: true,
    message: "Admin access granted",
    user: req.user,
  });
});

module.exports = authRoutes;
