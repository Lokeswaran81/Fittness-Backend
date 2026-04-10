// const express = require('express')
// const { login, signUp } = require('../Controllers/authController')

// const authRoutes = express.Router()

// authRoutes.route("/login").get(login)
// authRoutes.route("/signUp").post(signUp)

// module.exports = authRoutes


const express = require("express");
const { login, signUp } = require("../controllers/authController");

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/signup", signUp);

module.exports = authRoutes;