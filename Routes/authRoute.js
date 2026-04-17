const express = require("express");
const { login, signUp, logout, profile } = require("../Controllers/authController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/signup", signUp);
authRoutes.post("/logout", logout);

authRoutes.get("/profile", protect, profile);


authRoutes.get("/admin-test", protect, adminOnly, (req, res) => {
  res.json({
    success: true,
    message: "Admin access granted",
    user: req.user,
  });
});

module.exports = authRoutes;
