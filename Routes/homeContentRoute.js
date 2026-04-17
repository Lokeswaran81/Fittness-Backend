const express = require("express");
const {
  getHomeContent,
  updateHomeContent,
} = require("../Controllers/homeContentController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();


router.get("/", getHomeContent);

router.put("/", protect, adminOnly, updateHomeContent);

module.exports = router;